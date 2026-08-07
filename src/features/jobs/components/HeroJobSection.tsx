import HeroJobSearch from "./HeroJobSearch"
import HeroJobStats from "./HeroJobStats"



export const HeroJobSection = () =>{
    return(
        <section className="relative w-full h-[335px]  bg-gradient-to-br from-slate-900 via-slate-800 via-60% to-slate-700 flex justify-center align-center gap-8">
            <img alt="" aria-hidden="true" className="absolute inset-0 bg-[url('/crosspattern.svg')]"/>
            <div className="max-w-7xl flex flex-col justify-center align-start text-white">
                <div className="flex flex-col gap-4">
                    <h1 className="text-sm text-gray-400">Browse all opportunities</h1>
                    <h1 className="text-6xl font-bold">Find your next great role</h1>
                    <p className="text-m text-gray-400">Thousands of jobs from top companies, updated daily.</p>
                </div>
                <div className="flex flex-col gap-4 w-max-7xl">
                    <HeroJobSearch/>
                    <HeroJobStats/>
                </div>
            </div>
        </section>
    )
}