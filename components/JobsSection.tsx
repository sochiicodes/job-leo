import React from 'react';
import { Briefcase, MapPin, ChevronRight } from 'lucide-react';
import { CATEGORIES, JOB_LISTINGS } from '../constants';
import { JobCategory, JobListing } from '../types';

interface JobsSectionProps {
  selectedCategory: JobCategory;
  onCategoryChange: (cat: JobCategory) => void;
  getWhatsAppLink: (jobTitle?: string) => string;
}

export function JobsSection({ selectedCategory, onCategoryChange, getWhatsAppLink }: JobsSectionProps) {
  const filteredJobs = JOB_LISTINGS.filter(
    (job) => selectedCategory === 'All' || job.category === selectedCategory
  );

  return (
    <section id="jobs" className="py-24 px-4 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Openings in Nsukka</h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-bold border transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-500 text-white border-brand-500 shadow-xl shadow-brand-100'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-brand-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.map((job: JobListing) => (
            <div
              key={job.id}
              className="bg-white rounded-[2rem] border border-slate-100 p-8 flex flex-col shadow-sm hover:shadow-2xl hover:border-brand-200 transition-all group"
            >
              <span className="inline-block px-4 py-1.5 bg-slate-50 text-slate-600 text-[10px] font-black rounded-xl uppercase tracking-widest border border-slate-100 self-start mb-6">
                {job.category}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-brand-600 transition-colors tracking-tight">
                {job.title}
              </h3>
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-2.5 text-slate-400 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-brand-500" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2.5 text-slate-400 font-bold text-sm">
                  <Briefcase className="w-4 h-4 text-brand-500" />
                  {job.type}
                </div>
                {job.salary && (
                  <div className="font-black text-xl text-brand-600 mt-4 tracking-tight">{job.salary} <span className="text-sm">/mo</span> </div>
                )}
              </div>
              <a
                href={getWhatsAppLink(job.title)}
                target="_blank"
                className="w-full py-4 bg-slate-900 text-white text-center rounded-2xl font-black transition-all flex items-center justify-center gap-2 hover:bg-brand-500"
              >
                Apply Now <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
