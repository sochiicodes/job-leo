
// const express = require('express')
// const cors = require('cors')
// const jobs = require('./data/jobs')

// const http = require('http')
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     res.end(JSON.stringify({message: "My name is Sochima"}))
// })

// server.listen(3000, () =>{
//     console.log("Server running on Port 3000")
// })


import express, {Response, Request, NextFunction} from 'express'
import cors from 'cors'
import jobs from './data/jobs'

const app = express()


//middleware
app.use(cors())
app.use(express.json())

const logger = (req: Request, res:Response, next:NextFunction) =>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`)
    next()
}

app.use(logger)


//routes
app.get('/', (req: Request, res: Response) =>{
    res.json({message: "JobLeo API is running"})
}) 

app.get('/api/jobs', (req: Request, res: Response) =>{
      res.json(jobs)
})

app.get('/api/jobs/:id', (req: Request, res: Response) =>{
    const {id} = req.params
    const job = 
    res.json({id, message: `Fetching job ${id}`})
})


app.post('/api/jobs', (req: Request, res: Response) =>{
    const {title, company} = req.body
    res.status(201).json({title, company, id: Date.now()})
})



app.listen(3000, () => console.log("Serve running on port 3000"))