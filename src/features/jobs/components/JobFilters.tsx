import { useJobFilters } from "../hooks/useJobFilters"
import { useLockBodyScroll } from "../hooks/useLockBodyScroll"
import SideBarFilters from "./SidebarFilters"


const JobFilters = () =>{
    const { openMobileFilter, setOpenMobileFilter, } = useJobFilters()
    useLockBodyScroll(openMobileFilter)



    return(
        <>
            {/* Desktop */}
            <aside className="hidden md:block w-70 shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <SideBarFilters/>
            </aside>
            {/* MobileFilter */}
            {openMobileFilter && 
            (<aside className="w-full h-full bg-black/50 md:hidden fixed top-0 left-0 bottom-0 z-999 backdrop-blur-xs">
                <section className=" md:w-70 bg-white overflow-y-scroll w-75 h-full shadow-xl shrink-0 scrollbar-hide">
                    <div className="flex items-center justify-between px-7 py-2 border-b border-gray-100 bg-slate-100 sticky top-0 z-100">
                        <img
                            src="/logo.png"
                            alt="JobLeo"
                            className="w-6 h-6 object-contain group-hover:scale-105 transition-transform"
                        />
                        <button
                            onClick={() => setOpenMobileFilter(false)}
                            className="text-gray-400 hover:text-gray-700 text-xl cursor-pointer transition-all"
                        >
                            ✕
                        </button>
                    </div>
                    <SideBarFilters/>
                    {/* <footer>
                        <div className="w-full mx-auto mt-20 pt-10 border-t border-white/5 text-center text-[10px] font-black uppercase tracking-[0.3em]">
                            &copy; {new Date().getFullYear()} JobLeo Placement. Nsukka, Enugu State, Nigeria.
                        </div>
                    </footer> */}
                </section>
            </aside>)}
        </>
    )
}
export default JobFilters