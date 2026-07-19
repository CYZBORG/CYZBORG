import React from 'react';
import { SectionIds } from '../../types';
import { Instagram, Mail, ExternalLink, Facebook } from 'lucide-react';

interface SocialCardProps {
  title: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  hoverColorClass: string;
  hoverBgClass: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ title, subtitle, href, icon, hoverColorClass, hoverBgClass }) => {
  return (
    <a 
      href={href}
      target={href.startsWith('mailto:') ? '_self' : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className="group relative flex flex-row items-center p-5 md:p-6 bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 overflow-hidden rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 dark:shadow-none dark:hover:shadow-none"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${hoverBgClass}`}></div>
      
      <div className="w-full flex items-center justify-center relative z-10">
        <div className="flex items-center">
          <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 mr-4 md:mr-5 bg-neutral-50 dark:bg-neutral-900/80 rounded-lg border border-neutral-100 shadow-sm dark:shadow-none dark:border-neutral-800 group-hover:border-transparent transition-all duration-300 ${hoverColorClass} group-hover:scale-110`}>
            {icon}
          </div>

          <div className="flex flex-col text-left">
            <h3 className="font-display text-lg md:text-xl font-bold text-black dark:text-white uppercase tracking-wider mb-0.5 group-hover:text-black dark:text-white transition-colors">{title}</h3>
            <p className={`font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] transition-colors ${hoverColorClass} opacity-70 group-hover:opacity-100`}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className={`absolute right-5 md:right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 ${hoverColorClass}`}>
        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
      </div>
    </a>
  );
};

const Newsletter: React.FC = () => {
  return (
    <section id={SectionIds.NEWSLETTER} className="pt-8 pb-4 md:py-12 px-4 bg-white dark:bg-cyzborg-black relative overflow-hidden border-t border-neutral-200 dark:border-neutral-900 scroll-mt-24 md:scroll-mt-32">
      
      {/* Scattered LED Logo */}
      <img loading="lazy" decoding="async" 
        src="https://helmet-with-logo.netlify.app/cyzborg-lightning.svg" 
        className="dark:invert-0 invert absolute -bottom-[10%] -left-[20%] md:-left-[10%] w-[1000px] md:w-[1400px] opacity-10 dark:opacity-[0.02] pointer-events-none -rotate-6 select-none z-0"
        alt=""
      />

      {/* Subtle Blue Glow from Bottom */}
      <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[200px] bg-cyzborg-blue/5 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white uppercase tracking-tighter leading-none mb-4">
            The Network
          </h2>
          <p className="font-sans text-neutral-600 dark:text-neutral-400 text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3">
            Synchronize with CYZBORG across all frequencies.
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <SocialCard 
            title="TikTok"
            subtitle="@cyzborg"
            href="https://tiktok.com/@cyzborg"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.08-.18.96-.08 1.95-.08 2.93 0 2.21.05 4.43-.18 6.64-.44 3.98-3.76 7.15-7.91 7.29-3.48.16-6.8-1.66-8.23-4.81-1.63-3.69-.15-8.22 3.6-9.9.52-.23 1.07-.4 1.63-.52V13.8c-.85.16-1.68.58-2.22 1.25-.91 1.09-.86 2.77.12 3.82.97 1.07 2.7 1.23 3.95.43 1.35-.85 1.79-2.58 1.79-4.04V.02z"/>
              </svg>
            }
            hoverColorClass="text-black dark:text-cyzborg-blue font-bold group-hover:text-black dark:hover:text-cyzborg-blue"
            hoverBgClass="bg-cyzborg-blue"
          />
          
          <SocialCard 
            title="Instagram"
            subtitle="@cyzborg"
            href="https://instagram.com/cyzborg"
            icon={<Instagram className="w-6 h-6 md:w-8 md:h-8" />}
            hoverColorClass="text-cyzborg-orange font-bold group-hover:text-black dark:hover:text-cyzborg-orange"
            hoverBgClass="bg-cyzborg-orange"
          />
          
          <SocialCard 
            title="YouTube"
            subtitle="@CYZBORG.Official"
            href="https://youtube.com/@CYZBORG.Official"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            }
            hoverColorClass="text-red-500 group-hover:text-red-500"
            hoverBgClass="bg-red-500"
          />
          
          <SocialCard 
            title="X"
            subtitle="@cyzborg_"
            href="https://x.com/cyzborg_"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            }
            hoverColorClass="text-black dark:text-white group-hover:text-black dark:text-white"
            hoverBgClass="bg-white"
          />

          <SocialCard 
            title="Facebook"
            subtitle="@cyzborg.official"
            href="https://www.facebook.com/cyzborg.official"
            icon={<Facebook className="w-6 h-6 md:w-8 md:h-8" />}
            hoverColorClass="text-blue-500 group-hover:text-blue-500"
            hoverBgClass="bg-blue-500"
          />
          
          <SocialCard 
            title="Contact"
            subtitle="contact@cyzborg.com"
            href="mailto:contact@cyzborg.com"
            icon={<Mail className="w-6 h-6 md:w-8 md:h-8" />}
            hoverColorClass="text-cyzborg-orange font-bold group-hover:text-black dark:hover:text-cyzborg-orange"
            hoverBgClass="bg-cyzborg-orange"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Newsletter;