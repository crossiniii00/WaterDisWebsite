import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DISTRICT_FACILITIES, DISTRICT_INFO } from '../data/districtData';
import { IMAGES } from '../assets/images';
import { MapPin, Clock, Phone, Search, ExternalLink, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};





export const LocationsSection: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');
  const [barangayInput, setBarangayInput] = useState<string>('');
  const [lookupResult, setLookupResult] = useState<{
    status: 'served' | 'expansion';
    barangay: string;
    source: string;
    description: string;
  } | null>(null);

  const servedList = DISTRICT_INFO.servedBarangays;

  const handleBarangayLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!barangayInput.trim()) return;

    const query = barangayInput.trim().toLowerCase();
    
    // Check if query matches any served barangay
    const matchedServed = servedList.find(b => b.toLowerCase().includes(query) || query.includes(b.toLowerCase()));
    
    if (matchedServed) {
      let sourceName = 'Happy Valley Spring & Canawayon River';
      if (matchedServed === 'Poblacion Sur' || matchedServed === 'Buenavista') {
        sourceName = 'Sta. Teresita Spring & Canawayon River';
      } else if (matchedServed === 'San Juan' || matchedServed === 'Balite') {
        sourceName = 'Happy Valley Spring Gravity Feed';
      }

      setLookupResult({
        status: 'served',
        barangay: `Barangay ${matchedServed}`,
        source: sourceName,
        description: 'Currently connected to the San Isidro Water District active distribution grid (part of 516 active metered connections).'
      });
    } else {
      setLookupResult({
        status: 'expansion',
        barangay: barangayInput.trim(),
        source: 'San Isidro Master Expansion Plan',
        description: 'This area is located within the 25,590-hectare municipal boundary of San Isidro and is scheduled for transmission expansion under future phase development.'
      });
    }
  };

  const filteredFacilities = DISTRICT_FACILITIES.filter(f => {
    if (filterType === 'all') return true;
    if (filterType === 'public') return f.publicAccess;
    return f.type === filterType;
  });

  return (
    <section id="locations" className="bg-white text-stone-900 border-b border-stone-200 overflow-hidden font-sans">
      
      {/* Massive Chevron-style Blue Section Header Banner */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
        className="w-full bg-[#003B7E] text-center py-20 md:py-28 px-6 relative z-10 border-t-[8px] border-[#89CFF0]"
      >
        <span className="text-white/90 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 block">
          Service Area & Water Sources
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-[90px] font-black text-white tracking-tighter leading-[0.95] mb-6 drop-shadow-md">
          Water sources<br />& coverage
        </h2>
        <p className="text-sm md:text-base text-blue-50 max-w-3xl mx-auto leading-relaxed font-medium mt-6">
          San Isidro covers 255.90 square kilometers (25,590 hectares / 98.80 sq mi). We harvest water from two natural spring sources—Happy Valley and Sta. Teresita—and the Canawayon River surface water source to serve our community.
        </p>
      </motion.div>

      <div className="py-16 sm:py-20 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* 2 Key Water Sources Showcase: Blue & Green Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-14">
          
          {/* Spring Sources: Green Accent */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
            className="group bg-[#F8FAFC] border-2 border-emerald-200/80 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src={IMAGES.springSource}
                  alt="Happy Valley and Sta. Teresita Springs"
                  className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-500 bg-black ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-7">
                <span className="text-xs font-bold text-white bg-[#00A859] rounded-full px-3 py-1 inline-block mb-2 shadow-xs">
                  Two Natural Spring Sources
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2.5 group-hover:text-[#00A859] transition-colors leading-snug">
                  Happy Valley & Sta. Teresita Springs
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  Pristine natural mountain springs delivering pure, gravity-fed groundwater. Safeguarded by our commitment to environmental stewardship to preserve natural catchments for future generations.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-7 pb-5 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
              <span className="font-semibold text-stone-700">Type: Natural Gravity Springs</span>
              <span className="inline-flex items-center gap-1.5 text-[#00A859] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#00A859]" />
                Protected Sources
              </span>
            </div>
          </motion.div>

          {/* Surface Water: Blue Accent */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
            className="group bg-[#F8FAFC] border-2 border-blue-200/80 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src={IMAGES.waterPipes}
                  alt="Canawayon River Surface Water Source"
                  className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-500 bg-black ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-7">
                <span className="text-xs font-bold text-white bg-[#0052CC] rounded-full px-3 py-1 inline-block mb-2 shadow-xs">
                  Surface Water Source
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2.5 group-hover:text-[#0052CC] transition-colors leading-snug">
                  Canawayon River Surface Water Intake
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  Reliable surface water extraction and treatment infrastructure that supplements our spring supplies, guaranteeing sufficient and uninterrupted water delivery across all 516 active connections.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-7 pb-5 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
              <span className="font-semibold text-stone-700">Type: River Surface Source</span>
              <span className="inline-flex items-center gap-1.5 text-[#0052CC] font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0052CC]"></span>
                Active Supply
              </span>
            </div>
          </motion.div>

        </div>

        {/* Barangay Service Coverage Checker: Dark Charcoal/Black Canvas with Green & Blue */}
        {/* Barangay Service Coverage Checker: Dark Charcoal/Black Canvas with Green & Blue */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
          className="bg-[#0A0F1D] text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-xl border border-stone-800"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 bg-blue-950/70 border border-blue-800 rounded-full px-3 py-1 mb-2">
              <Search className="w-3.5 h-3.5 text-blue-400" />
              Barangay Service Verification
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
              Check if your barangay is served by SIWD
            </h3>
            <p className="text-sm text-stone-300 mb-4 leading-relaxed font-normal">
              San Isidro is politically subdivided into 14 barangays across 25,590 hectares. Enter your barangay name (e.g. "San Juan", "Poblacion Norte", "Alegria", "Salvacion", "Balite", "Buenavista", or "Poblacion Sur") to check coverage status:
            </p>

            <form onSubmit={handleBarangayLookup} className="flex flex-col sm:flex-row gap-2.5 mb-4">
              <input
                type="text"
                value={barangayInput}
                onChange={(e) => setBarangayInput(e.target.value)}
                placeholder="Enter barangay name (e.g., Poblacion Norte, San Juan)"
                className="flex-1 border border-stone-700 bg-[#14233D] rounded-xl px-4 py-2.5 text-sm focus:border-blue-400 focus:outline-hidden text-white placeholder-stone-400"
              />
              <button
                type="submit"
                className="bg-[#0052CC] hover:bg-[#003d99] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                Check Coverage
              </button>
            </form>

            {/* Active Served Barangays Chips */}
            <div className="mt-3">
              <span className="text-xs font-bold text-stone-400 block mb-1.5">
                Current 7 Served Barangays:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {servedList.map((bgry) => (
                  <button
                    key={bgry}
                    type="button"
                    onClick={() => {
                      setBarangayInput(bgry);
                      setLookupResult({
                        status: 'served',
                        barangay: `Barangay ${bgry}`,
                        source: bgry.includes('Sur') || bgry.includes('Buenavista') ? 'Sta. Teresita Spring & Canawayon' : 'Happy Valley Spring & Canawayon',
                        description: 'Currently connected to the active San Isidro Water District distribution grid.'
                      });
                    }}
                    className="text-xs font-semibold text-[#00E676] bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800 px-3 py-1 rounded-xl transition-colors cursor-pointer"
                  >
                    ✓ {bgry}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {lookupResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 bg-[#14233D] border border-blue-800 rounded-2xl"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {lookupResult.status === 'served' ? (
                      <CheckCircle2 className="w-5 h-5 text-[#00E676]" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-amber-400" />
                    )}
                    <span className={`text-xs font-bold ${
                      lookupResult.status === 'served' ? 'text-[#00E676]' : 'text-amber-300'
                    }`}>
                      {lookupResult.status === 'served' ? 'Active Service Territory' : 'Master Plan Expansion Area'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-stone-400 block">Location:</span>
                      <strong className="text-white text-sm">{lookupResult.barangay}</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block">Water Source Allocation:</span>
                      <strong className="text-white text-sm">{lookupResult.source}</strong>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-stone-400 block">Status Note:</span>
                      <span className="text-stone-200">{lookupResult.description}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Facilities Directory Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-stone-200 pb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900">
              San Isidro Water District Facilities Directory
            </h3>
            <p className="text-xs text-stone-500">
              Headquarters, water sources, and operational stations in San Isidro, Northern Samar
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-stone-100 p-1 rounded-2xl">
            {[
              { id: 'all', label: 'All Sources & Offices' },
              { id: 'public', label: 'Public Walk-In' },
              { id: 'watershed', label: 'Spring Sources' },
              { id: 'treatment', label: 'Surface River' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  filterType === tab.id ? 'bg-[#0052CC] text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Facility Cards Grid: Crisp Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-[#F8FAFC] border-2 border-stone-200 rounded-3xl p-6 flex flex-col justify-between shadow-xs hover:border-[#0052CC] hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div>
                    <span className="text-xs font-bold text-[#0052CC] block mb-0.5">
                      {facility.type.toUpperCase()} FACILITY
                    </span>
                    <h4 className="text-base font-bold text-stone-900 leading-snug">
                      {facility.name}
                    </h4>
                  </div>
                  {facility.publicAccess ? (
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200 shrink-0">
                      Public Office
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold text-stone-600 bg-stone-200 px-3 py-0.5 rounded-full shrink-0">
                      Utility Source
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 font-normal">
                  {facility.description}
                </p>

                <div className="space-y-1.5 border-t border-stone-200 pt-3 text-xs">
                  <div className="flex items-start gap-2 text-stone-700">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                    <span>{facility.address}, {facility.city}</span>
                  </div>
                  <div className="flex items-start gap-2 text-stone-700">
                    <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                    <span>{facility.hours}</span>
                  </div>
                  <div className="flex items-start gap-2 text-stone-700">
                    <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                    <span>{facility.phone}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200">
                <div className="flex flex-wrap gap-1.5">
                  {facility.features.map((feat, fIdx) => (
                    <span 
                      key={fIdx} 
                      className="text-[11px] text-stone-600 bg-white px-2.5 py-0.5 rounded-lg border border-stone-200"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Office Notice */}
        <div className="p-5 sm:p-6 bg-[#F8FAFC] border-2 border-stone-200 rounded-3xl text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div>
            <strong className="text-stone-900 font-bold">San Isidro Water District Headquarters:</strong> Purok 2, Don Manuel Palop Street, Poblacion Norte, San Isidro, Northern Samar. Open Monday through Friday, 8:00 AM – 5:00 PM for all customer service and water connection applications.
          </div>
          <a
            href="https://maps.google.com/?q=San+Isidro+Northern+Samar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-white bg-[#0052CC] hover:bg-[#003d99] whitespace-nowrap shrink-0 transition-colors px-4 py-2 rounded-xl shadow-xs"
          >
            <span>View on Map</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
