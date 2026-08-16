import { useJobFilters } from "../hooks/useJobFilters"
import SideBarFilters from "./SidebarFilters"


const JobFilters = () =>{
    const {
        openMobileFilter,
        setOpenMobileFilter,
    } = useJobFilters()



    return(
        <>
            {/* Desktop */}
            <aside className="hidden md:block w-70 shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <SideBarFilters/>
            </aside>
            {/* MobileFilter */}
            {openMobileFilter && 
            (<aside className="w-full h-full bg-black/50 md:hidden fixed top-0 left-0 bottom-0 z-999">
                <section className=" md:w-70 bg-white overflow-y-scroll w-75 h-full shadow-xl shrink-0 scrollbar-hide">
                    <div className="flex items-center justify-between px-7 py-2 border-b border-gray-100 bg-slate-100 sticky top-0 z-100">
                        <span className=" text-slate-300">Close</span>
                        <button
                            onClick={() => setOpenMobileFilter(false)}
                            className="text-gray-400 hover:text-gray-700 text-xl cursor-pointer transition-all"
                        >
                            ✕
                        </button>
                    </div>
                    <SideBarFilters/>
                </section>
            </aside>)}
        </>
    )
}
export default JobFilters