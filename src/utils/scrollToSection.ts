export const scrollToSection = (id: string, tab?: "seeker" | "employer") =>{
    const element = document.getElementById(id)
    
    element?.scrollIntoView({behavior: 'smooth'})

} 