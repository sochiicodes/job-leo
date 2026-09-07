import express,{Response, Request, NextFunction} from 'express'
import jobs from '../data/jobs'
import { JobListing } from '../data/jobs'


const app = express()
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
    const id = req.params.id

    console.log("Requested ID:", id)
    console.log("Jobs:", jobs)

    const job = jobs.find((job) => job.id === id)
    if(!job){
        return res.status(404).json({error: "Job not Found"})
    }

    res.json({job, message: `Fetching job ${id}`})
})


app.post('/api/jobs', (req: Request, res: Response) =>{
    const job:JobListing = {
        id: crypto.randomUUID(),
        ...req.body
    }
    jobs.push(job)
})

app.delete('/api/jobs/:id', (req: Request, res: Response) =>{
    
    const id = req.params.id

    const index = jobs.findIndex((job) => job.id === id)

    if(index === -1){
        return res.status(404).json({error: "Job not found"})
    }
    jobs.splice(index, 1)

    res.status(200).json(jobs)
})

app.patch('/api/jobs/:id', (req: Request, res: Response)=>{
    const id = req.params.id
    const jobIndex = jobs.findIndex((job) => job.id === id)
    if(jobIndex === -1){
        return res.status(404).json({error: "Job not found"})
    }
    jobs[jobIndex] = {
        ...jobs[jobIndex],
        ...req.body,
        id: jobs[jobIndex].id
    }
    res.status(200).json(jobs[jobIndex])
})
