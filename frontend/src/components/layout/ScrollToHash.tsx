import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ScrollToHash = () => {
    const {pathname, hash} = useLocation()
     useEffect(() =>{
        if(!hash) return

        const timer = setTimeout(() =>{
            const element = document.getElementById(hash.substring(1))

            if(element){
                element.scrollIntoView({behavior: 'smooth', block: 'start'})
            }
        }, 100)

        return () => clearTimeout(timer)
    }, [pathname, hash])

    return null
}
export default ScrollToHash