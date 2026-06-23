import React from 'react';
import { Briefcase, Users, CheckCircle, ExternalLink } from 'lucide-react';
import { TERMS_JOB_SEEKERS, TERMS_EMPLOYERS } from '../../data/constants';

interface TermsSectionProps {
  activeTab: 'seeker' | 'employer';
  onTabChange: (tab: 'seeker' | 'employer') => void;
  onViewFullTerms: () => void;
}

export function TermsSection({ activeTab, onTabChange, onViewFullTerms }: TermsSectionProps) {
  const activeTerms = activeTab === 'seeker' ? TERMS_JOB_SEEKERS : TERMS_EMPLOYERS;
  const points = activeTab === 'seeker' ? TERMS_JOB_SEEKERS.points : TERMS_EMPLOYERS.points;

  return (
    <section id="terms" className="py-24 px-4 bg-slate-50/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">The Fine Print</h2>
          <p className="text-slate-500 font-medium text-lg">Official terms verbatim from our policy documents.</p>
        </div>

        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
          <div className="flex border-b border-slate-100">
            <button
              onClick={() => onTabChange('seeker')}
              className={`flex-1 py-6 px-8 font-black text-sm transition-all tracking-widest uppercase flex items-center justify-center gap-2 ${
                activeTab === 'seeker'
                  ? 'bg-white text-brand-700 border-b-4 border-brand-500 shadow-sm'
                  : 'text-slate-400 hover:text-slate-600 bg-slate-50'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Employee
            </button>
            <button
              onClick={() => onTabChange('employer')}
              className={`flex-1 py-6 px-8 font-black text-sm transition-all tracking-widest uppercase flex items-center justify-center gap-2 ${
                activeTab === 'employer'
                  ? 'bg-white text-brand-700 border-b-4 border-brand-500 shadow-sm'
                  : 'text-slate-400 hover:text-slate-600 bg-slate-50'
              }`}
            >
              <Users className="w-4 h-4" />
              Employer
            </button>
          </div>

          <div className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Key {activeTab === 'seeker' ? 'Job Seeker' : 'Job Giver'} Terms
              </h3>
              <button
                onClick={onViewFullTerms}
                className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm hover:underline"
              >
                View Official Document
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
            <ul className="space-y-6 mb-12">
              {points.map((point, idx) => (
                <li key={idx} className="flex gap-5 items-start text-slate-600 leading-relaxed font-medium">
                  <div className="mt-2 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-600" />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-sm font-bold text-slate-500 text-center">
              Notice: By using JobLeo, you agree to comply with all terms stated above.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
