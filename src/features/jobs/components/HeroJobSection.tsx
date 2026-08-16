import HeroJobSearch from "./HeroJobSearch"
import HeroJobStats from "./HeroJobStats"



export const HeroJobSection = () =>{
    return(
        <section className="relative py-12 bg-linear-to-br from-slate-900 via-slate-800 via-60% to-slate-700 w-full">
            <div className="absolute z-0 inset-0 bg-[url('/crosspattern.svg')] pointer-events-none"/>
            <div className="relative z-10 flex flex-col gap-4  text-white/90 max-w-4xl m-auto">
                <div className="flex flex-col gap-1 items-center">
                    <h1 className="text-3xl font-bold">Find your next great role</h1>
                    <p className="text-xs text-gray-400">Thousands of jobs from top companies, updated daily.</p>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <HeroJobSearch/>
                    <HeroJobStats/>
                </div>
                {/* <p className="text-white">Call Me Alco</p> */}
            </div>
            
        </section>
    )
}