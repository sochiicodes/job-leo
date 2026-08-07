import HeroJobSearch from "./HeroJobSearch"
import HeroJobStats from "./HeroJobStats"



export const HeroJobSection = () =>{
    return(
        <section className="relative w-full h-[335px]  bg-gradient-to-br from-slate-900 via-slate-800 via-60% to-slate-700 text-white justify-center align-center">
            <img alt="" aria-hidden="true" className="absolute inset-0 bg-[url('/crosspattern.svg')]"/>
            <div>
                <h1>Browse all opportunities</h1>
                <h1>Find your next great role</h1>
                <p>Thousands of jobs from top companies, updated daily.</p>
            </div>
            <div className="flex flex-col gap-5">
                <HeroJobSearch/>
                <HeroJobStats/>
            </div>
        </section>
    )
}