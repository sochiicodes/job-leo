import React from 'react';
import { FileText, X } from 'lucide-react';
import { TERMS_JOB_SEEKERS, TERMS_EMPLOYERS } from '../../constants';

interface FullTermsOverlayProps {
  activeTab: 'seeker' | 'employer';
  onClose: () => void;
}

export function FullTermsOverlay({ activeTab, onClose }: FullTermsOverlayProps) {
  const activeTerms = activeTab === 'seeker' ? TERMS_JOB_SEEKERS : TERMS_EMPLOYERS;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <FileText className="text-brand-500 w-6 h-6" />
            <h3 className="text-xl font-black text-slate-900">{activeTerms.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto leading-relaxed text-slate-700 font-medium bg-white">
          <div className="whitespace-pre-wrap text-[15px] space-y-4">
            {activeTerms.fullText}
          </div>
        </div>
        <div className="p-8 bg-slate-50 border-t border-slate-100 text-center">
          <button
            onClick={onClose}
            className="w-full md:w-auto px-16 py-5 bg-brand-500 text-white rounded-2xl font-black text-lg hover:bg-brand-600 transition-all shadow-xl shadow-brand-100 active:scale-95"
          >
            I accept, thanks
          </button>
        </div>
      </div>
    </div>
  );
}
