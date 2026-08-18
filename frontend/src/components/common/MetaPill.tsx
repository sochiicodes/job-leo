import { BriefcaseBusiness, Clock, MapPin, Network } from "lucide-react";

const MetaPill = ({ children, icon, title }: { children: React.ReactNode; icon: string, title?: string }) => {
    return (
      <span className="flex items-center gap-2 text-[11px] bg-page text-gray-400 border border-gray-200 rounded-full px-2 py-0.5" title={title}>
        {icon === 'location' && <MapPin size={12} className="text-brand-600"/>}
        {icon === 'briefcase' && <BriefcaseBusiness size={12} className="text-brand-600"/>}
        {icon === 'clock' && <Clock size={12 } className="text-brand-600"/>}
        {icon === "network" && <Network size={12} className="text-brand-600"/>}
        {children}
      </span>
    );
  }

  export default MetaPill