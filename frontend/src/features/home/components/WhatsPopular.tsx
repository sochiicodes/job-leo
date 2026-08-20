
import { ArrowRight, BriefcaseBusiness, BedDouble, Printer, PrinterCheck, GraduationCap, TrafficCone } from 'lucide-react';
import { JOB_LISTINGS } from '../../../constants/jobs';

import { WhatsPopularCard } from '../../jobs';
import { hospitalityDescription, officeDescription, salesDescription } from '../../../constants/whatspopular';
import { getJobFilterCount } from '../../jobs/utils/getJobFilterCount';
import { useJobFilters } from '../../jobs/hooks/useJobFilters';
import { useNavigate } from 'react-router-dom';






const WhatsPopular = () => {
 const navigate = useNavigate()

  return (
    <section className="py-24 px-8 md:px-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-10">
        <section className="flex flex-col items-start md:items-center">
          <h3 className="text-brand-600 uppercase text-xs">Browse Opportunities</h3>
          <h2 className="text-2xl lg:text-4xl font-black text-slate-900 tracking-tight ">Explore by Industry & Location</h2>
        </section>
       
        <section className="flex flex-col gap-20 lg:gap-10 w-full">
          {/* Popular Categories */}
          <section className="flex flex-col gap-10">
            <div className="flex justify-between">
              <section className="flex flex-col">
                <h1 className="text-xl text-black font-medium">Popular Categories</h1>
                <p className="text-xs text-slate-400">High-demand employment sectors</p>
              </section>
              <section 
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-brand-600 group transition-colors cursor-pointer"
                onClick={() => navigate('/jobs?category=All')}
                >
                  <p>View All</p> 
                  <ArrowRight size={14} className="text-slate-500 duration-200 group-hover:text-brand-600 group-hover:translate-x-1 transition-colors "/>
              </section>
            </div>
            <section className="flex flex-col lg:flex-row justify-between gap-8">
              <WhatsPopularCard
                title="Sales"
                description={salesDescription}
                footerText="Explore Positions"
                icon={BriefcaseBusiness}
                count={getJobFilterCount({
                  jobs: JOB_LISTINGS,
                  field: "category",
                  value:  "Sales"
                })}
                onClick={() => navigate('/jobs?category=Sales')}
              />
              <WhatsPopularCard
                title="Hospitality"
                description={hospitalityDescription}
                footerText="Explore Positions"
                icon={BedDouble}
                count={getJobFilterCount({
                  jobs: JOB_LISTINGS,
                  field: "category",
                  value:  "Hospitality"
              })}
              onClick={() => navigate('/jobs?category=Hospitality')}
              />
              <WhatsPopularCard
                title="Office"
                description={officeDescription}
                footerText="Explore Positions"
                icon={PrinterCheck}
                count={getJobFilterCount({
                  jobs: JOB_LISTINGS,
                  field: "category",
                  value:  "Office"
                })}
                onClick={() => navigate('/jobs?category=Office')}
              />
            </section>
          </section>

          {/* Popular Categories */}
          <section className="flex flex-col gap-10">
            <div className="flex justify-between">
              <section className="flex flex-col">
                <h1 className="text-xl text-black font-medium">Popular Locations</h1>
                <p className="text-xs text-slate-400">Key commercial districts close to you</p>
              </section>
              <section className="flex items-center gap-3 text-sm text-slate-700 group hover:text-brand-600 group transition-colors">
                  <p>View All</p> 
                  <ArrowRight size={14} className="text-slate-500 duration-200 group-hover:translate-x-1 transition-colors group-hover:text-brand-600 group "/>
              </section>
            </div>
            <section className="flex flex-col lg:flex-row  justify-between gap-8">
              <WhatsPopularCard
                title="Nsukka Town"
                description={"Central commercial district with supermarkets, corporate banks and marts."}
                footerText="View Openings"
                icon={BriefcaseBusiness}
                count={getJobFilterCount({
                  jobs: JOB_LISTINGS,
                  field: "state",
                  value:  "Enugu"
              })}
              onClick={() => navigate('/jobs?location=Enugu')}
              />
              <WhatsPopularCard
                title="Akuroad"
                description={"High-traffic retail avenue with pharmacies, boutiques and electronics stores."}
                footerText="View Openings"
                icon={TrafficCone}
                count={getJobFilterCount({
                  jobs: JOB_LISTINGS,
                  field: "state",
                  value:  "Lagos"
              })}
              onClick={() => navigate('/jobs?location=Lagos')}
              />
              <WhatsPopularCard
                title="UNN Campus"
                description={"University gates, print shops, student eateries and cyber centers."}
                footerText="View Openings"
                icon={GraduationCap}
                count={getJobFilterCount({
                  jobs: JOB_LISTINGS,
                  field: "state",
                  value:  "Abuja"
              })}
              onClick={() => navigate('/jobs?location=Abuja')}
              />
            </section>
          </section>
          
        </section>
      </div>
    </section>
  );
}

export default WhatsPopular