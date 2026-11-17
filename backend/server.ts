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
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(express.json())
app.use(cookieParser())


app.use("/api/jobs", jobRoutes)
app.use("/api/auth", authRoutes)

app.get("/", (req: Request, res: Response)=>{
    res.send("JobLeo API is running 😊")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

console.log("Server file finished loading")

