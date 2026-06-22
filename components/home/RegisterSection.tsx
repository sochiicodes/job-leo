import React from 'react';
import { UserPlus, Building2, CheckCircle } from 'lucide-react';
import { SEEKER_FORM_URL, EMPLOYER_FORM_URL } from '../../constants';

export function RegisterSection() {
  return (
    <section id="register" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Join the Network</h2>
          <p className="text-slate-500 font-medium text-lg">Choose how you want to get started with JobLeo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 md:p-14 rounded-[3.5rem] bg-brand-50 border border-brand-100 flex flex-col shadow-sm hover:shadow-xl transition-all group">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm text-brand-500 group-hover:scale-110 transition-transform">
              <UserPlus className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">I am looking for a job</h3>
            <p className="text-slate-600 mb-8 font-medium leading-relaxed">
              Register in our candidate database. Pay a one-time ₦2,000 fee and get referred to the best employers in Nsukka.
            </p>
            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                <CheckCircle className="w-5 h-5 text-brand-500" /> Access to exclusive local roles
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                <CheckCircle className="w-5 h-5 text-brand-500" /> Professional vetting & support
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                <CheckCircle className="w-5 h-5 text-brand-500" /> Quick interview referrals
              </div>
            </div>
            <a
              href={SEEKER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-6 bg-brand-500 text-white rounded-2xl font-black text-xl text-center hover:bg-brand-600 transition-all shadow-xl shadow-brand-100"
            >
              Register as Seeker
            </a>
          </div>

          <div className="p-10 md:p-14 rounded-[3.5rem] bg-slate-900 border border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all group text-white">
            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 shadow-sm text-brand-400 group-hover:scale-110 transition-transform border border-white/10">
              <Building2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black mb-4 tracking-tight">I am looking to hire</h3>
            <p className="text-slate-400 mb-8 font-medium leading-relaxed">
              Access Nsukka's finest talent. Describe your role and hire the perfect candidate. Pay ₦5,000 upon successful hire.
            </p>
            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                <CheckCircle className="w-5 h-5 text-brand-500" /> Pre-screened local candidates
              </div>
              <div className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                <CheckCircle className="w-5 h-5 text-brand-500" /> Yearly recruitment subscription
              </div>
              <div className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                <CheckCircle className="w-5 h-5 text-brand-500" /> 7-14 days replacement policy
              </div>
            </div>
            <a
              href={EMPLOYER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-6 bg-white text-slate-900 rounded-2xl font-black text-xl text-center hover:bg-brand-500 hover:text-white transition-all shadow-xl"
            >
              Register as Employer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
