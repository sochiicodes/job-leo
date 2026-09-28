// ├── db/            → Database connection and database-related code

import {Pool} from "pg"
import dotenv from "dotenv"

dotenv.config()

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

pool.query("SELECT NOW()")
    .then(result =>{
        console.log("Database connected:", result.rows[0])
    }).catch(error =>{
        console.error("Database connection failed:", error)
    })