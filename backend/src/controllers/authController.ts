// ├── controllers/   → Request handling logic

import express,{Response, Request} from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {pool} from '../db'


//set cookie options for secure cookies
const cookieOptions ={
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: "strict" as const,
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
}

//generate a JWT token for the user
const generateToken = (id: string) =>{
    const secret = process.env.JWT_SECRETE

    if(!secret) {
        throw new Error("JWT secret is not defined")
    }

    return jwt.sign({id}, secret,{
        expiresIn: '30d'
    });
}

//Register a new user
export const register =  async(req: Request, res: Response) =>{
    const {name, email, password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({message: 'Please provide all required fields'})
    }

    const userExists = await pool.query(
        'SELECT * FROM users WHERE email = $1, [email]'
        )
    if(userExists.rows.length > 0){
        return res.status(400).json({message: 'usr already exists'})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await pool.query(
        `INSERT INTO users
        (name, email, password)
        VALUES ($1, $2, $3) 
        RETURNING id, name, email
        `,[name, email, hashedPassword]
        
    )

    const token = generateToken (newUser.rows[0].id)
    res.cookie('token', token, cookieOptions)

    return res.status(201).json({user: newUser.rows[0]})
}


//Login a user
export const login = async(req: Request, res: Response) =>{
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({message: 'Please provide all required fields'})
    }
    //Find a user by associated with their email
    const user = await pool.query(`SELECT * FROM users WHERE email = $1`, [email])

    if(user.rows.length === 0){
        return res.status(400).json({message: 'Invalid credentials'})
    }

    //if user found
    const userData =  user.rows[0];
    const isMatch = await bcrypt.compare(password, userData.password)

    if(!isMatch){
        return res.status(400).json({message: 'Invalid credentials'})
    }

    //if users password matches, we give him a token
    const token = generateToken(userData.id)
    res.cookie('token', token, cookieOptions)
    res.json({user: {id: userData.id, name: userData.name, email: userData.email}})
}

//Me
export const getMe = async(req: Request, res: Response) =>{
    res.json(req.body)
    //return info of the logged in user from protect middleware
}

//logout
export const logout = (res: Response, req: Request) =>{
    res.cookie('token', '', {...cookieOptions, maxAge: 1})
    res.json({message: 'Logged out successfully'})
}
