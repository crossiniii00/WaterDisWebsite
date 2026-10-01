import React, { useState, useEffect } from 'react';
import { DistrictSeal } from './DistrictSeal';
import { ExternalLink, Search } from 'lucide-react';

interface NavbarProps {
  onOpenBillingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBillingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { label: 'Who we are', href: '#purpose' },
    { label: 'What we do', href: '#featured' },
    { label: 'Sustainability', href: '#purpose' },
    { label: 'Rates & schedule', href: '#rates' },
  ];

  const rightNavLinks = [
    { label: 'Newsroom', href: '#notices' },
    { label: 'Careers', href: '#notices' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3'
          : 'bg-linear-to-b from-black/85 via-black/35 to-transparent py-4 sm:py-6'
      }`}
    >
      <div className="w-full max-w-[1550px] mx-auto px-6 sm:px-10 lg:px-16 relative">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Left Navigation: Natural spacing on the left wing */}
          <nav className="flex items-center space-x-5 lg:space-x-9 overflow-x-auto no-scrollbar py-1 pr-6">
            {leftNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm lg:text-[15px] font-medium text-white hover:text-[#00A859] transition-colors whitespace-nowrap drop-shadow-sm tracking-normal"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Centered Official District Emblem & Title: Absolutely anchored at 50% horizontal center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <a 
              href="#" 
              className="flex flex-col items-center justify-center group focus:outline-hidden py-1 px-3 text-center"
              aria-label="San Isidro Water District Homepage"
            >
              <div className="transition-transform group-hover:scale-105 duration-200">
                <DistrictSeal className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md" />
              </div>
              <span className="text-[10px] sm:text-[11.5px] font-bold tracking-wider text-white text-center leading-none mt-1 group-hover:text-[#00A859] transition-colors drop-shadow-md whitespace-nowrap uppercase">
                San Isidro Water District
              </span>
            </a>
          </div>

          {/* Right Navigation: Natural spacing on the right wing leading to search icon */}
          <div className="flex items-center space-x-5 lg:space-x-8 py-1 pl-6">
            {rightNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm lg:text-[15px] font-medium text-white hover:text-[#00A859] transition-colors whitespace-nowrap drop-shadow-sm tracking-normal"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={onOpenBillingModal}
              className="text-xs sm:text-sm lg:text-[15px] font-medium text-white hover:text-[#00A859] transition-colors whitespace-nowrap drop-shadow-sm tracking-normal cursor-pointer flex items-center gap-1"
            >
              <span>Billing</span>
              <ExternalLink className="w-3 h-3 text-[#00A859] opacity-90 hidden sm:inline" />
            </button>

            {/* Clean White Search Icon at the far right */}
            <a
              href="#locations"
              title="Search Service Territory & Facilities"
              className="text-white hover:text-[#00A859] transition-colors p-1 focus:outline-hidden"
              aria-label="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-sm stroke-[2.2]" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
