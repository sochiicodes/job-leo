import { BriefcaseBusiness, Clock, MapPin } from "lucide-react";

const MetaPill = ({ children, icon }: { children: React.ReactNode; icon: string }) => {
    return (
      <span className="flex items-center gap-2 text-[11px] bg-page text-gray-400 border border-gray-200 rounded-full px-2 py-0.5">
        {icon === 'location' && <MapPin size={12} className="text-brand-600"/>}
        {icon === 'briefcase' && <BriefcaseBusiness size={12} className="text-brand-600"/>}
        {icon === 'clock' && <Clock size={12 } className="text-brand-600"/>}
        {children}
      </span>
    );
  }

  export default MetaPill