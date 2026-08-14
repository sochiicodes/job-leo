import HeroJobSearch from "./HeroJobSearch"
import HeroJobStats from "./HeroJobStats"



export const HeroJobSection = () =>{
    return(
        <section className="relative py-15 bg-linear-to-br from-slate-900 via-slate-800 via-60% to-slate-700 gap-8 w-full">
            <div className="absolute z-0 inset-0 bg-[url('/crosspattern.svg')] pointer-events-none"/>
            <div className="relative z-10 flex flex-col gap-6 text-white max-w-4xl m-auto">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xs text-gray-400 uppercase">Browse all opportunities</h1>
                    <h1 className="text-5xl font-bold">Find your next great role</h1>
                    <p className="text-m text-gray-400">Thousands of jobs from top companies, updated daily.</p>
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