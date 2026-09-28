


import express, {Response, Request} from 'express'
import cors from 'cors'
import jobRoutes from './src/routes/jobs'

const app = express()


//middleware
app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response)=>{
    res.send("JobLeo API is running 😊")
})
app.use("/api/jobs", jobRoutes)



app.listen(5432, () => console.log("Server running on port 5432"))

console.log("Server file finished loading")