import { WHATSAPP_BASE_URL } from "../constants/urls"

export const getWhatsAppLink = (jobTitle?: string, type?: "seeker" | "employer") =>{
    let message = "Hello JobLeo, I'd like to inquire about a job role."

    if(jobTitle){
        message = `Hello JobLeo, I am interested in the ${jobTitle} role.`
    }else if(type === "seeker"){
        message =  "Hello JobLeo, I want to register as a Job Seeker."
    }else if(type === "employer"){
        message = "Hello JobLeo, I am looking to hire staff for my business."
    }

    return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}