// ├── middleware/    → Functions that run between request and controller

import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { pool } from "../db";

export const protect = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const token = req.cookies?.token
        const secret = process.env.JWT_SECRET

        if(!token){
            return res.status(401).json({message: "Not authorized, no token"})
        }
        if(!secret) {
            throw new Error("JWT secret is not defined")
        }

        const decoded = jwt.verify(token, secret)
        if(typeof decoded === "string" || !decoded.id){
            return res.status(401).json({message: "Invalid token payload"})
        }

        const user = await pool.query(
            `SELECT id, name, email FROM users 
            WHERE id = $1`, [decoded.id]
        )
        if(user.rows.length === 0){
            return res.status(401).json({message: "Not athorized, user not found"})
        }

        req.user = user.rows[0]
        next()
        
    }catch(error){
        console.error("Authentication error:", error)
        return res.status(500).json({message: "internal server error"})
    }
}