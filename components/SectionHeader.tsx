
import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title, center }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <span className="text-[#c49b63] text-sm font-bold uppercase tracking-[0.3em] mb-4 inline-block">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#3d2b1f] leading-tight">
        {title}
      </h2>
      <div className={`mt-4 h-1.5 w-24 bg-[#c49b63] rounded-full ${center ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeader;
