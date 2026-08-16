export const formatPostedDate = (postedAt: string) =>{
    const postedDate = new Date(postedAt)
    const todaysDate = new Date()

    const diffsInMs = todaysDate.getTime() - postedDate.getTime()
    const diffInDays = Math.floor(diffsInMs /(1000 * 60 * 60 * 24))

    //Less  than 1 day
    if(diffInDays < 1) return "Today"

    //Less  than 1-6 day
    if(diffInDays < 7) return `${diffInDays} day${diffInDays === 1? "" : "s"}ago`

    //Less  than 1-4 weeks
    if(diffInDays <= 4) return `${diffInDays} week${diffInDays === 1? "" : "s"}ago`

    //More than 4 weeks
    
    return postedDate.toLocaleDateString("en-Us", {
        weekday: "short",
        day: "numeric",
        month: "short",
    })
}