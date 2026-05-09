import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

export function ToggleSwitch({ checked, onChange, label }: ToggleSwitchProps) {
  return (
    <div className="flex items-center justify-between">
      {label && (
        <span className="text-sm font-bold text-slate-600">
          {label}
        </span>
      )}

      <button
        onClick={onChange}
        className={`relative inline-flex h-6 min-w-11 items-center rounded-full transition-colors outline-none ${
          checked ? 'bg-green-500' : 'bg-slate-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}