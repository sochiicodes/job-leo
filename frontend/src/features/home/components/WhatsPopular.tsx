import React, { useState } from 'react';
import { Briefcase, MapPin, ChevronRight, ArrowBigRight, ArrowRight } from 'lucide-react';
import { JOB_CATEGORIES, JOB_LISTINGS } from '../../../constants/jobs';
import { JobCategory, JobFilter, JobListing } from '../../jobs/types';
import { ToggleSwitch } from '../../../components';
import { WhatsPopularCard } from '../../jobs';




interface JobsSectionProps {
  selectedCategory: JobFilter;
  onCategoryChange: (cat: JobCategory) => void;
  getWhatsAppLink: (jobTitle?: string) => string;
}

const WhatsPopular = ({ selectedCategory, onCategoryChange, getWhatsAppLink }: JobsSectionProps) => {


  return (
    <section className="py-24 px-4 bg-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-10">
        <section className="flex flex-col justify-center items-center">
          <h3 className="text-brand-600 uppercase text-xs">Browse Opportunities</h3>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight ">Explore by Industry & Location</h2>
        </section>
       
        <section className="flex flex-col gap-8 w-full">
          {/* Popular Categories */}
          <section className="flex flex-col gap-10">
            <div className="flex justify-between">
              <section className="flex flex-col">
                <h1 className="text-xl text-black font-medium">Popular Categories</h1>
                <p className="text-xs text-slate-400">High-demand employment sectors</p>
              </section>
              <section className="flex items-center gap-3 text-sm text-slate-700 group">
                  <p>View All</p> 
                  <ArrowRight size={14} className="text-slate-500 duration-200 group-hover:translate-x-1 group-hover:transition-colors "/>
              </section>
            </div>
            <section className="flex justify-between gap-8">
              <WhatsPopularCard/>
              <WhatsPopularCard/>
              <WhatsPopularCard/>
            </section>
          </section>
          {/* Popular Locations */}
          <section>
            location
          </section>
        </section>
      </div>
    </section>
  );
}

export default WhatsPopular