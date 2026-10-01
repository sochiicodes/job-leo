// ├── controllers/   → Request handling logic

import express,{Response, Request} from 'express'

import { pool } from '../db'


const app = express()
// const logger = (req: Request, res:Response, next:NextFunction) =>{
//     console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`)
//     next()
// }
// app.use(logger)


export const getJobs = async (req: Request, res: Response) =>{
    const result = await pool.query(`
        SELECT 
            job.*, 
            users.name AS poster_name
        FROM jobs JOIN users
            ON jobs.posted_by = users.id
    `)
      res.json({jobs: result.rows})
}

export const getJobById = async (req: Request, res: Response) =>{
    const id = req.params.id

    console.log("Requested ID:", id)
    const result = await pool.query(
        `SELECT 
            jobs.*, 
            users.name AS poster_name
        FROM jobs JOIN users
            ON jobs.posted_by = users.id
        WHERE id = $1`, [id]
    )
    // const job = jobs.find((job) => job.id === id)
    if(!result.rows[0]){
        return res.status(404).json({error: "Job not Found"})
    }

    res.json({job: result.rows[0], message: `Fetching job ${id}`})
}


export const createJob = async (req: Request, res: Response) =>{
        try{
            const {title,
                category,
                type,
                level,
                city,
                state,
                area,
                salary,
                posted_at,
                status,
                featured,
                tags
            } = req.body

            const result = await pool.query(
                `INSERT INTO jobs (
                    title,
                    category,
                    type,
                    level,
                    city,
                    state,
                    area,
                    salary,
                    posted_at,
                    status,
                    featured,
                    tags)
                VALUES (
                    $1, $2, $3, $4, $5, $6,
                    $7, $8, $9, $10, $11, $12
                )
                RETURNING *`,[
                        title,
                        category,
                        type,
                        level,
                        city,
                        state,
                        area,
                        salary,
                        posted_at,
                        status,
                        featured,
                        tags
                      ]
            );
            res.status(201).json({jobs: result.rows[0]})

        }catch(err){
            console.error(err)

            res.status(500).json({error: "Failed to create Job"})
        }
}


export const updateJob = async (req: Request, res: Response)=>{
    const id = req.params.id
    const {title} = req.body
    // const jobIndex = jobs.findIndex((job) => job.id === id)
    // if(jobIndex === -1){
    //     return res.status(404).json({error: "Job not found"})
    // }
    // jobs[jobIndex] = {
    //     ...jobs[jobIndex],
    //     ...req.body,
    //     id: jobs[jobIndex].id
    // }
    const result = await pool.query(
        `
        UPDATE jobs
        SET title = $1
        WHERE id = $2
        RETURNING *
        `,[title, id]
    )
    if (result.rowCount === 0){
        return res.status(400).json({error: "Job not found"})
    }

    res.status(200).json({jobs: result.rows, message: `Job ${title} updated successfully`})
}

export const deleteJob = async (req: Request, res: Response) =>{
    
    const id = req.params.id

    // const index = jobs.findIndex((job) => job.id === id)
    // const job = jobs.find((job) => job.id === id)
    // if(index === -1){
    //     return res.status(404).json({error: "Job not found"})
    // }
    // jobs.splice(index, 1)

    const result = await pool.query(
        `DELETE FROM jobs
        WHERE id = $1
        RETURNING *`, [id]

    )

    if(result.rowCount === 0){
        return res.status(404).json({error: "Job not Found"})
    }

    res.status(200).json({message: `Job ${id} deleted successfully!`, jobs: result.rows})
}