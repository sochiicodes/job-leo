// psql -U postgres -d jobleo


import express, {Response, Request} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jobRoutes from './src/routes/jobs'
import authRoutes from './src/routes/auth'

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



app.listen(3000, () => console.log("Server running on port 3000"))

console.log("Server file finished loading")

