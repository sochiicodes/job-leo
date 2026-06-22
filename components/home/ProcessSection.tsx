import React from 'react';
import { MessageSquare, ShieldCheck, Zap } from 'lucide-react';

const STEPS = [
  { icon: <MessageSquare />, title: 'WhatsApp Direct', desc: 'Just say hello. No complex dashboards or forms. We keep it personal and fast.' },
  { icon: <ShieldCheck />, title: 'Vetted Matching', desc: 'We screen every candidate against your needs to ensure a perfect local fit.' },
  { icon: <Zap />, title: 'Rapid Placement', desc: 'Hiring happens in days, not weeks. Direct communication, zero friction.' },
];

export function ProcessSection() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-white border-y border-slate-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-20 tracking-tight">The JobLeo Method</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/20 hover:bg-white hover:shadow-2xl hover:border-brand-200 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-white text-brand-500 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-all">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
