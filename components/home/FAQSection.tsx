import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../data/constants';

interface FAQSectionProps {
  openFaqIndex: number | null;
  onFaqToggle: (idx: number | null) => void;
}

export function FAQSection({ openFaqIndex, onFaqToggle }: FAQSectionProps) {
  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Common Questions</h2>
          <p className="text-slate-500 font-medium text-lg">Everything you need to know about our services.</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-slate-100 rounded-[2rem] overflow-hidden bg-slate-50/30">
              <button
                onClick={() => onFaqToggle(openFaqIndex === idx ? null : idx)}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-white transition-colors"
              >
                <span className="text-lg font-black text-slate-900 tracking-tight">{faq.question}</span>
                <div
                  className={`w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 transition-transform duration-300 ${
                    openFaqIndex === idx ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-brand-500" />
                </div>
              </button>
              {openFaqIndex === idx && (
                <div className="px-8 pb-8 pt-0 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
