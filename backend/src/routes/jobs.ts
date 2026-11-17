


import { Router } from "express";
import { 
    createJob, 
    deleteJob, 
    getJobById, 
    getJobs, 
    updateJob 
} from "../controllers/jobController";

const jobRoutes = Router()

jobRoutes.get("/", getJobs)
jobRoutes.get("/:id", getJobById)
jobRoutes.post("/", createJob)
jobRoutes.patch("/:id", updateJob)
jobRoutes.delete("/:id", deleteJob)

export default jobRoutes