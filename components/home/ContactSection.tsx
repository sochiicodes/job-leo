import React from 'react';
import { Clock, Mail } from 'lucide-react';

interface ContactSectionProps {
  getWhatsAppLink: () => string;
}

export function ContactSection({ getWhatsAppLink }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-900 text-white rounded-[3.5rem] overflow-hidden shadow-3xl flex flex-col lg:flex-row relative">
          <div className="lg:w-1/2 p-12 md:p-16 relative z-10 border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-brand-500/10 text-brand-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-brand-500/20">
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-ping"></div>
              Nsukka Job Hotline
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
              The Best Talent <br />
              <span className="text-brand-500">Starts Here.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 font-medium leading-relaxed">
              Chat directly with our support team. We're here to help you find your next opportunity or hire your next star.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <Clock className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-black uppercase tracking-widest">Office Hours</p>
                  <p className="text-[16px] font-bold text-white">Mon - Sat, 8AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10 bg-slate-800/20">
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 mb-8 backdrop-blur-sm">
              <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-4">Official WhatsApp</p>
              <div className="text-xl md:text-4xl font-black text-white tracking-tighter mb-8">
                +234 912 813 1343
              </div>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                className="w-full py-4 bg-brand-500 text-white rounded-2xl font-black text-xl hover:bg-brand-400 flex items-center justify-center gap-3 shadow-2xl transition-all mb-6"
              >
                Start Chatting
              </a>
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-3">Prefer Email?</p>
                <a
                  href="mailto:jobleohq@gmail.com"
                  className="text-brand-400 hover:text-white transition-colors font-bold flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  jobleohq@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
