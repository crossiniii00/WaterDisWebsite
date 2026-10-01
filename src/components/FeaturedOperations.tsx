import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../assets/images';
import { ArrowRight, CheckCircle2, Droplets, Shield, Compass, Landmark } from 'lucide-react';

export const FeaturedOperations: React.FC = () => {
  const operations = [
    {
      id: 0,
      number: '01',
      category: 'Rates & Fiscal Transparency',
      title: 'Adopted Table 1.1 SIWD Water Rates',
      headline: 'Approved minimum charge of ₱185.00 for the first 10 cu.m.',
      description:
        'Established under local public utility policy. Commodity charges range from ₱19.25 to ₱23.70 per cu.m, with calibrated commercial tiers (1.25x – 2.00x) without commercial profit markups.',
      image: IMAGES.heroReservoir,
      imageCaption: 'San Isidro Municipal Water Grid & Intake System',
      stat1: { label: 'Minimum Charge', value: '₱185.00 / 10 cu.m', color: 'blue' },
      stat2: { label: 'Active Connections', value: '516 Connections', color: 'green' },
      badge: 'Table 1.1 Adopted Rates',
      href: '#rates',
      actionText: 'View Table 1.1 water rates',
      icon: Droplets,
    },
    {
      id: 1,
      number: '02',
      category: 'Spring & Surface Sources',
      title: 'Happy Valley, Sta. Teresita & Canawayon River',
      headline: 'Two pristine mountain springs and one surface river source.',
      description:
        'San Isidro Water District harvests natural mountain water from Happy Valley and Sta. Teresita springs, complemented by the Canawayon River surface water source for dependable community supply.',
      image: IMAGES.watershedCatchment,
      imageCaption: 'Happy Valley & Sta. Teresita Natural Spring Catchments',
      stat1: { label: 'Natural Springs', value: '2 Spring Sources', color: 'blue' },
      stat2: { label: 'Surface Intake', value: 'Canawayon River', color: 'green' },
      badge: 'Naturally Pure Sources',
      href: '#locations',
      actionText: 'Explore our water sources',
      icon: Compass,
    },
    {
      id: 2,
      number: '03',
      category: 'Coverage & Service Area',
      title: 'Serving 7 Barangays Across 25,590 Hectares',
      headline: 'Supplying 353 residential/gov and 163 commercial connections.',
      description:
        'Covering a total municipal territory of 255.90 km² (25,590 hectares / 98.80 sq mi). Actively serving San Juan, Salvacion, Alegria, Balite, Buenavista, Poblacion Norte, and Poblacion Sur.',
      image: IMAGES.treatmentFacility,
      imageCaption: 'San Isidro Municipal Transmission & Distribution Mains',
      stat1: { label: 'Municipal Area', value: '25,590 Hectares', color: 'blue' },
      stat2: { label: 'Served Barangays', value: '7 Active Barangays', color: 'green' },
      badge: 'Northern Samar Territory',
      href: '#locations',
      actionText: 'Check service coverage & directory',
      icon: Landmark,
    },
    {
      id: 3,
      number: '04',
      category: 'Governance & Core Values',
      title: 'Created Under SB Resolution No. 052 (Dec 18, 1995)',
      headline: 'Policy formulation by a 5-sector Board of Directors under PD 198.',
      description:
        'Guided by our Core Values of Commitment, Teamwork, and Environmental Stewardship. Supervised by the General Manager across Administrative, Customer Service, and Maintenance personnel.',
      image: IMAGES.qualityLab,
      imageCaption: 'Purok 2, Don Manuel Palop Street, Poblacion Norte Headquarters',
      stat1: { label: 'Board Sectors', value: '5 Civic Sectors', color: 'blue' },
      stat2: { label: 'Created Year', value: 'December 1995', color: 'green' },
      badge: 'PD 198 Local Water District',
      href: '#purpose',
      actionText: 'View mission, vision & values',
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeOp = operations[activeIndex];

  return (
    <section 
      id="featured" 
      className="relative w-full bg-[#F8FAFC] text-stone-900 border-b border-stone-200 overflow-hidden font-sans"
    >
      {/* Massive Chevron-style Green Section Header Banner */}
      <div className="w-full bg-[#004D2E] text-center py-20 md:py-28 px-6 relative z-10 border-t-[8px] border-[#D4E157]">
        <span className="text-white/90 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 block">
          Since 1995
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-[90px] font-black text-[#D4E157] tracking-tighter leading-[0.95] mb-6 drop-shadow-md">
          District<br />operations
        </h2>
        <p className="text-sm md:text-base text-white max-w-2xl mx-auto leading-relaxed font-medium mt-6">
          Delivering safe, potable, reliable, and sufficient water supply to the constituents of San Isidro, Northern Samar under Presidential Decree 198.
        </p>
      </div>

      <div className="relative py-16 sm:py-24">
        {/* Subtle brand color accents: subtle blue & green ambient blurs in background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 w-full flex flex-col justify-between h-full">
          
          {/* Cozy Split Layout: Left Story + Right Friendly Pill List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Focused highlight */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOp.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Brand color badges (Blue & Green) */}
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-white bg-[#003B7E] rounded-full px-4 py-1.5 shadow-sm uppercase tracking-wider">
                      Profile {activeOp.number}
                    </span>
                    <span className="text-xs font-bold text-[#577A38] bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 shadow-sm">
                      {activeOp.category}
                    </span>
                  </div>

                  {/* Deep Black Bold Headline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
                    {activeOp.headline}
                  </h3>

                  {/* Clear, readable Description */}
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl font-medium">
                    {activeOp.description}
                  </p>

                  {/* Stat Cards with White, Blue, and Green palette */}
                  <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
                    <div className="bg-white border border-[#254A8D]/20 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2">
                        {activeOp.stat1.label}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#254A8D] block">
                        {activeOp.stat1.value}
                      </span>
                    </div>

                    <div className="bg-white border border-[#577A38]/20 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2">
                        {activeOp.stat2.label}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#577A38] block">
                        {activeOp.stat2.value}
                      </span>
                    </div>
                  </div>

                  {/* High-Contrast Action Button */}
                  <div className="pt-4">
                    <a
                      href={activeOp.href}
                      className="inline-flex items-center gap-3 text-sm font-bold text-white bg-[#003B7E] hover:bg-[#002a5a] px-7 py-3.5 rounded-full transition-all group shadow-md"
                    >
                      <span>{activeOp.actionText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Dark Black/Charcoal Frame with Green & Blue Highlights */}
            <div className="lg:col-span-5">
              <div className="bg-[#0A0F1D] text-white rounded-[2rem] shadow-2xl p-5 sm:p-7 space-y-3 border border-stone-800">
                <div className="px-3 pb-4 border-b border-stone-800 flex items-center justify-between text-xs text-stone-400">
                  <span className="font-bold text-stone-300 uppercase tracking-wider">District Operations & Profile</span>
                  <span className="text-emerald-400 font-bold">Select topic</span>
                </div>

                {operations.map((item, idx) => {
                  const isSelected = activeIndex === idx;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#14233D] border-2 border-[#254A8D] text-white shadow-lg'
                          : 'bg-transparent hover:bg-[#1E293B] border border-transparent text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-black ${isSelected ? 'text-[#577A38]' : 'text-stone-500'}`}>
                            {item.number}
                          </span>
                          <span className="text-xs font-bold text-stone-400">
                            {item.category}
                          </span>
                        </div>
                        {isSelected && (
                          <CheckCircle2 className="w-5 h-5 text-[#577A38] shrink-0" />
                        )}
                      </div>

                      <div className={`text-sm sm:text-base leading-snug ${
                        isSelected ? 'text-white font-extrabold' : 'text-stone-300 font-semibold'
                      }`}>
                        {item.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Subtle caption */}
              <div className="mt-4 px-3 flex items-center justify-between text-xs text-stone-500">
                <span className="truncate max-w-[280px] font-medium">📍 {activeOp.imageCaption}</span>
                <span className="text-[#577A38] font-bold shrink-0">{activeOp.badge}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
