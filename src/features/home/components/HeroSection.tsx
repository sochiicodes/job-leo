import { HeroJobSearch, HeroJobStats } from "../../jobs"


export const HeroSection = () =>{
    return(
        <section className="relative w-full h-[335px] bg-gradient-to-br from-brand-600 via-brand-500 via-60% to-brand-400">
            <img alt="" aria-hidden="true" className="absolute inset-0 bg-[url('/crosspattern.svg')]"/>
            <div>
                <h1>Browse all opportunities</h1>
                <h1>Find your next great role</h1>
                <p>Thousands of jobs from top companies, updated daily.</p>
            </div>
            <HeroJobSearch/>
            <HeroJobStats/>
        </section>
    )
}