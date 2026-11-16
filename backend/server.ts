// psql -U postgres -d jobleo


import express, {Response, Request} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';

import jobRoutes from './src/routes/jobs'
import authRoutes from './src/routes/auth'


dotenv.config();
const app = express()

//middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.get("/", (req: Request, res: Response)=>{
    res.send("JobLeo API is running 😊")
})
app.use("/api/jobs", jobRoutes)
app.use("/api/auth", authRoutes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

console.log("Server file finished loading")

