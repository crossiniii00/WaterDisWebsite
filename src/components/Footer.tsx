import React from 'react';
import { DISTRICT_INFO } from '../data/districtData';
import { DistrictSeal } from './DistrictSeal';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenBillingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBillingModal }) => {
  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-black">
      {/* Brand Ribbon Line: Blue (#0052CC) & Green (#00A859) */}
      <div className="w-full flex h-1.5 shrink-0">
        <div className="w-2/3 bg-[#0052CC]"></div>
        <div className="w-1/3 bg-[#00A859]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Brand & Emergency Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-800 pb-8 mb-12 gap-6">
          <div className="flex items-center gap-3.5">
            <DistrictSeal className="w-12 h-12 shrink-0 drop-shadow-md" />
            <div className="leading-none border-l-2 border-neutral-700 pl-3.5">
              <span className="block text-lg sm:text-xl font-bold tracking-tight text-white uppercase">
                SAN ISIDRO
              </span>
              <span className="block text-xs font-semibold text-[#00A859] tracking-wider uppercase mt-1">
                WATER DISTRICT · NORTHERN SAMAR
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <div className="bg-black border border-neutral-800 px-4 py-2">
              <span className="text-[#00A859] font-mono block text-[10px] uppercase">24/7 Leak Dispatch Hotline</span>
              <strong className="text-white text-sm font-mono">{DISTRICT_INFO.emergencyPhone}</strong>
            </div>
            <div className="text-neutral-300">
              <span className="text-neutral-500 block text-[10px] uppercase font-mono">Administration Hours</span>
              <span className="font-semibold text-white">Mon–Fri: 8:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>

        {/* 4 Clean Columns matching corporate footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 text-xs">
          
          {/* Col 1: Who We Are */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-[#00A859] border-b border-neutral-800 pb-2 mb-4">
              who we are
            </h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <a href="#purpose" className="hover:text-white transition-colors">
                  Our Mission & Vision
                </a>
              </li>
              <li>
                <a href="#purpose" className="hover:text-white transition-colors">
                  1.2.3 Core Values
                </a>
              </li>
              <li>
                <a href="#purpose" className="hover:text-white transition-colors">
                  SB Resolution No. 052 (Dec 18, 1995)
                </a>
              </li>
              <li>
                <a href="#purpose" className="hover:text-white transition-colors">
                  5-Sector Board of Directors
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: What We Do */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-[#00A859] border-b border-neutral-800 pb-2 mb-4">
              water sources & territory
            </h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Happy Valley Spring Source
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Sta. Teresita Spring Source
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Canawayon River Surface Intake
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  7 Active Served Barangays
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  25,590-Hectare Service Area
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Rates & Customer Care */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-[#00A859] border-b border-neutral-800 pb-2 mb-4">
              rates & customer care
            </h4>
            <ul className="space-y-2 text-neutral-300 mb-4">
              <li>
                <a href="#rates" className="hover:text-white transition-colors">
                  Table 1.1 San Isidro Water Rates
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Monthly Tariff Bill Estimator
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:text-white transition-colors">
                  Active Service Advisories
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:text-white transition-colors">
                  Report a Leak in Your Barangay
                </a>
              </li>
            </ul>

            <div className="bg-black border border-neutral-800 p-3 rounded-xl">
              <span className="font-bold text-white block text-[11px] mb-1">
                SIWD Office Information
              </span>
              <p className="text-[11px] text-neutral-400 mb-2">
                Customer payments and connection applications are administered at the SIWD Main Office.
              </p>
              <button
                type="button"
                onClick={onOpenBillingModal}
                className="w-full text-center text-[11px] font-bold uppercase tracking-wider text-white bg-[#0052CC] hover:bg-[#00875A] py-1.5 px-2 rounded-lg transition-colors cursor-pointer"
              >
                Office & Payment Info
              </button>
            </div>
          </div>

          {/* Col 4: District Headquarters */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-[#00A859] border-b border-neutral-800 pb-2 mb-4">
              san isidro headquarters
            </h4>
            <div className="space-y-2.5 text-neutral-300 leading-relaxed font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00A859] shrink-0 mt-0.5" />
                <span>{DISTRICT_INFO.headquartersAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Office: {DISTRICT_INFO.mainPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>{DISTRICT_INFO.generalEmail}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">
              Created under SB Res. No. 052 (Dec 18, 1995) pursuant to PD No. 198.
            </div>
          </div>

        </div>

        {/* Bottom Legal Sub-bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} San Isidro Water District (SIWD). All rights reserved. Non-Profit Public Special District.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
            <span>Citizen Charter</span>
            <span>·</span>
            <span>Accessible Public Center</span>
            <span>·</span>
            <span>Public Transparency</span>
            <span>·</span>
            <span>Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
