import { NavigateFunction } from "react-router-dom"

export const handleNavClick = (
    sectionId: string,
    navigate: NavigateFunction,
    pathname: string
) =>{
    if(pathname !== "/"){
        navigate(`/#${sectionId}`)
        return
    }
    
    const element = document.getElementById(sectionId)
    
    element?.scrollIntoView({behavior: 'smooth', block: "start"})

} 