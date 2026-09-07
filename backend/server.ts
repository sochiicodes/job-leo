


import express, {Response, Request, NextFunction} from 'express'
import cors from 'cors'

const app = express()


//middleware
app.use(cors())
app.use(express.json())





app.listen(3000, () => console.log("Serve running on port 3000"))

console.log("Server file finished loading")