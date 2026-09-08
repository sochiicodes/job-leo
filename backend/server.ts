


import express, {Response, Request, NextFunction} from 'express'
import cors from 'cors'
import router from './src/routes/jobs'
import jobRoutes from './src/routes/jobs'

const app = express()


//middleware
app.use(cors())
app.use(express.json())

app.use("/api/jobs", jobRoutes)



app.listen(3000, () => console.log("Serve running on port 3000"))

console.log("Server file finished loading")