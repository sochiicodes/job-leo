import { useJobFilters } from "./useJobFilters"
export const useActiveFilterChips = () => {


    const {
        category,
        setCategory,
        jobType,
        setJobType,
        expLevel,
        setExpLevel,
        location,
        setLocation,
        datePosted,
        setDatePosted,
        jobStatus,
        setJobStatus,
    } = useJobFilters()

    const chips = [
        ...(category !== "All"
            ? [{label: category, onRemove: () => setCategory("All")}]
            : []),
        
            ...jobType.map((type) =>({
                label: type,
                onRemove: () => setJobType(type)
            })),

            ...expLevel.map((level) =>({
                label: level,
                onRemove: () => setExpLevel(level)
            })),

            ...location.map((loc) =>({
                label: loc,
                onRemove: () => setLocation(loc)
            })),

            ...(datePosted !== "any" 
                ? [{
                    label: `Last ${datePosted} ${datePosted === "1" ? "day" : " days"}`,
                    onRemove: () => setDatePosted("any")
                }] 
                : []),
            
            // ...jobStatus?.map((status) =>({
            //     label: status,
            //     onRemove: () => setJobStatus(status)
            // }))
    ]

return chips
}