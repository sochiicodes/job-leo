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
        jobSearchTerm,
        locationSearchTerm,
        setJobSearchTerm,
        setLocationSearchTerm,
    } = useJobFilters()

    const chips = [
            ...(jobSearchTerm !== ""
                ? [{label: jobSearchTerm, onRemove: () => setJobSearchTerm("")}]
                : []
            ),

            ...(locationSearchTerm !== ""
                ? [{label: locationSearchTerm, onRemove: () => setLocationSearchTerm("")}]
                : []
            ),

            ...location.map((loc) =>({
                label: loc,
                onRemove: () => setLocation(loc)
            })),

            ...jobType.map((type) =>({
                label: type,
                onRemove: () => setJobType(type)
            })),
        

            ...expLevel.map((level) =>({
                label: level,
                onRemove: () => setExpLevel(level)
            })),

            ...(jobStatus !== "All"
                ? [{label: jobStatus, onRemove: () => setJobStatus("All")}]
                : []
            ),
            
            ...(datePosted !== "any" 
                ? [{
                    label: `Last ${datePosted} ${datePosted === "1" ? "day" : " days"}`,
                    onRemove: () => setDatePosted("any")
                }] 
                : []),
            
            ...(category !== "All"
                ? [{label: category, onRemove: () => setCategory("All")}]
                : []),
    ]

return chips
}