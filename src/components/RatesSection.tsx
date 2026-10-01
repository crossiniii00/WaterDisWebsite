import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TABLE_1_1_RATES } from '../data/districtData';
import { Calculator, Download, ChevronRight, FileText, Info } from 'lucide-react';

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

interface RatesSectionProps {
  onOpenBillingModal: () => void;
}

export const RatesSection: React.FC<RatesSectionProps> = ({ onOpenBillingModal }) => {
  const [activeTab, setActiveTab] = useState<'table1' | 'commercial'>('table1');
  
  // Rate Estimator State
  const [customerClass, setCustomerClass] = useState<'residential' | 'comm_full' | 'comm_a' | 'comm_b' | 'comm_c'>('residential');
  const [consumptionInput, setConsumptionInput] = useState<number>(14);

  // Multiplier calculation based on classification
  const multipliers: Record<string, { label: string; factor: number }> = {
    residential: { label: 'Residential / Government', factor: 1.00 },
    comm_a: { label: 'Commercial A', factor: 1.25 },
    comm_b: { label: 'Commercial B', factor: 1.50 },
    comm_c: { label: 'Commercial C', factor: 1.75 },
    comm_full: { label: 'Commercial (Standard)', factor: 2.00 },
  };

  const currentMultiplier = multipliers[customerClass].factor;
  const clampedUnits = Math.max(0, consumptionInput);

  // Minimum charge for first 10 cu.m
  const baseMinCharge = 185.00 * currentMultiplier;

  // Tier calculations
  let tier11_20Cost = 0;
  let tier21_30Cost = 0;
  let tier31_40Cost = 0;
  let tier41UpCost = 0;

  if (clampedUnits > 10) {
    const units11_20 = Math.min(Math.max(0, clampedUnits - 10), 10);
    tier11_20Cost = units11_20 * (19.25 * currentMultiplier);
  }

  if (clampedUnits > 20) {
    const units21_30 = Math.min(Math.max(0, clampedUnits - 20), 10);
    tier21_30Cost = units21_30 * (20.20 * currentMultiplier);
  }

  if (clampedUnits > 30) {
    const units31_40 = Math.min(Math.max(0, clampedUnits - 30), 10);
    tier31_40Cost = units31_40 * (21.70 * currentMultiplier);
  }

  if (clampedUnits > 40) {
    const units41Up = Math.max(0, clampedUnits - 40);
    tier41UpCost = units41Up * (23.70 * currentMultiplier);
  }

  const commodityTotal = tier11_20Cost + tier21_30Cost + tier31_40Cost + tier41UpCost;
  const estimatedTotal = baseMinCharge + commodityTotal;

  return (
    <section id="rates" className="bg-[#F8FAFC] border-b border-stone-200 overflow-hidden font-sans text-stone-800">
      
      {/* Massive Chevron-style Black Section Header Banner */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
        className="w-full bg-[#111111] text-center py-20 md:py-28 px-6 relative z-10 border-t-[8px] border-[#89CFF0]"
      >
        <span className="text-white/90 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 block">
          Official Tariff Schedule
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-[90px] font-black text-white tracking-tighter leading-[0.95] mb-6 drop-shadow-md">
          San Isidro<br />Water Rates
        </h2>
        <p className="text-sm md:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed font-medium mt-6">
          Approved water tariffs serving 516 active metered connections in San Isidro, Northern Samar. Calculated to recover operational costs without commercial markup.
        </p>
      </motion.div>

      <div className="w-full bg-[#1A1A1A] py-16 sm:py-24 border-t border-stone-800">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Billing Advisory Card - Dark Mode */}
          <div className="bg-[#222222] border-2 border-stone-800 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#89CFF0]" />
                <span>Customer Billing Desk</span>
                <span className="text-[11px] font-bold text-[#111111] bg-[#89CFF0] px-2.5 py-0.5 rounded-full">
                  SIWD Office
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Customer meter billing and payments are accepted at Purok 2, Don Manuel Palop St., Poblacion Norte, San Isidro.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenBillingModal}
              className="shrink-0 text-xs font-bold text-black bg-white hover:bg-stone-200 py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>View Office & Billing Info</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tab Buttons - Dark Mode */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => setActiveTab('table1')}
                className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-all cursor-pointer border ${
                  activeTab === 'table1'
                    ? 'bg-[#89CFF0] text-[#111111] border-[#89CFF0]'
                    : 'bg-transparent text-stone-400 border-stone-700 hover:text-white hover:border-stone-500'
                }`}
              >
                Table 1.1: Base Rates & Commodity Tiers
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-all cursor-pointer border ${
                  activeTab === 'commercial'
                    ? 'bg-[#89CFF0] text-[#111111] border-[#89CFF0]'
                    : 'bg-transparent text-stone-400 border-stone-700 hover:text-white hover:border-stone-500'
                }`}
              >
                Commercial Classifications & Factors
              </button>
            </div>

            {/* Table Container - Dark Mode */}
            <AnimatePresence mode="wait">
              {activeTab === 'table1' && (
                <motion.div
                  key="table1"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl bg-[#0A0A0A] overflow-hidden shadow-xl border border-stone-800"
                >
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#111111] text-stone-400 text-xs font-bold uppercase tracking-[0.15em]">
                        <th className="py-5 px-6">Charge Category</th>
                        <th className="py-5 px-6">Consumption Range</th>
                        <th className="py-5 px-6 text-right">Adopted Tariff (PHP)</th>
                        <th className="py-5 px-6">Description & Application</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800">
                      <tr className="bg-[#1A2530] hover:bg-[#202E3C] transition-colors">
                        <td className="py-5 px-6 font-semibold text-[#89CFF0]">
                          Minimum Charge
                        </td>
                        <td className="py-5 px-6 text-xs text-stone-300 font-medium">
                          First 10 cu.m (0 – 10 cu.m)
                        </td>
                        <td className="py-5 px-6 font-bold text-white text-right tabular-nums text-lg">
                          ₱185.00
                        </td>
                        <td className="py-5 px-6 text-xs text-stone-400">
                          Base lifeline charge for up to 10 cubic meters of potable water.
                        </td>
                      </tr>
                      {TABLE_1_1_RATES.commodityCharges.map((tier) => (
                        <tr key={tier.range} className="hover:bg-[#151515] transition-colors">
                          <td className="py-5 px-6 font-medium text-stone-200">
                            Commodity Charge
                          </td>
                          <td className="py-5 px-6 text-xs text-stone-400">
                            {tier.range}
                          </td>
                          <td className="py-5 px-6 font-semibold text-stone-200 text-right tabular-nums text-base">
                            ₱{tier.ratePerCum.toFixed(2)} / cu.m
                          </td>
                          <td className="py-5 px-6 text-xs text-stone-500">
                            {tier.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-4 bg-[#050505] border-t border-stone-800 text-xs text-stone-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
                    <span>UNIT OF MEASURE: 1 CU.M = 1,000 LITERS</span>
                    <span className="font-bold text-stone-400">OFFICIAL TABLE 1.1</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 'commercial' && (
                <motion.div
                  key="commercial"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl bg-[#0A0A0A] overflow-x-auto shadow-xl border border-stone-800"
                >
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#111111] text-stone-400 text-xs font-bold uppercase tracking-[0.15em]">
                        <th className="py-5 px-6">Classification</th>
                        <th className="py-5 px-6 text-center">Multiplier Factor</th>
                        <th className="py-5 px-6 text-right">Min. Charge (10 cu.m)</th>
                        <th className="py-5 px-6 text-right">11–20 cu.m Rate</th>
                        <th className="py-5 px-6">Typical Establishments</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800">
                      <tr className="hover:bg-[#151515] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">Commercial (Standard)</td>
                        <td className="py-5 px-6 text-center font-black text-[#89CFF0]">2.00</td>
                        <td className="py-5 px-6 text-right font-semibold text-stone-200 tabular-nums">₱370.00</td>
                        <td className="py-5 px-6 text-right text-stone-400 tabular-nums">₱38.50 / cu.m</td>
                        <td className="py-5 px-6 text-xs text-stone-500">Major commercial, trade stores, wholesale warehouses</td>
                      </tr>
                      <tr className="hover:bg-[#151515] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">Commercial A</td>
                        <td className="py-5 px-6 text-center font-black text-[#89CFF0]">1.25</td>
                        <td className="py-5 px-6 text-right font-semibold text-stone-200 tabular-nums">₱231.25</td>
                        <td className="py-5 px-6 text-right text-stone-400 tabular-nums">₱24.06 / cu.m</td>
                        <td className="py-5 px-6 text-xs text-stone-500">Small retail stores, tailoring, barbershops, sari-sari stores</td>
                      </tr>
                      <tr className="hover:bg-[#151515] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">Commercial B</td>
                        <td className="py-5 px-6 text-center font-black text-[#89CFF0]">1.50</td>
                        <td className="py-5 px-6 text-right font-semibold text-stone-200 tabular-nums">₱277.50</td>
                        <td className="py-5 px-6 text-right text-stone-400 tabular-nums">₱28.88 / cu.m</td>
                        <td className="py-5 px-6 text-xs text-stone-500">Eateries, cafes, bakeries, medical and dental clinics</td>
                      </tr>
                      <tr className="hover:bg-[#151515] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">Commercial C</td>
                        <td className="py-5 px-6 text-center font-black text-[#89CFF0]">1.75</td>
                        <td className="py-5 px-6 text-right font-semibold text-stone-200 tabular-nums">₱323.75</td>
                        <td className="py-5 px-6 text-right text-stone-400 tabular-nums">₱33.69 / cu.m</td>
                        <td className="py-5 px-6 text-xs text-stone-500">Car wash facilities, ice plants, lodging houses, laundries</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="p-4 bg-[#050505] border-t border-stone-800 text-xs text-stone-500 font-mono">
                    NOTE: Commercial rates apply according to business classification registered with the Municipality of San Isidro.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cozy Tariff Estimator Tool - Dark Mode */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInOut}
            id="calculator"
            className="bg-[#111111] border border-stone-800 rounded-3xl p-8 md:p-12 shadow-2xl mt-16 hover:border-stone-700 transition-colors duration-500"
          >
            <div className="border-b border-stone-800 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#89CFF0] mb-2">
                  <Calculator className="w-4 h-4" />
                  Table 1.1 Public Tariff Estimator
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tighter">
                  Monthly water bill estimator
                </h3>
              </div>
              <div className="text-xs text-stone-500 font-mono">
                MIN CHARGE + TIERED CONSUMPTION
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Input Controls */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">
                    Customer Classification
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'residential', label: 'Residential / Gov (1.00x)' },
                      { id: 'comm_a', label: 'Commercial A (1.25x)' },
                      { id: 'comm_b', label: 'Commercial B (1.50x)' },
                      { id: 'comm_c', label: 'Commercial C (1.75x)' },
                      { id: 'comm_full', label: 'Commercial (2.00x)' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCustomerClass(item.id as any)}
                        className={`py-3 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer border ${
                          customerClass === item.id
                            ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                            : 'bg-[#1A1A1A] text-stone-400 border-stone-800 hover:border-stone-500 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest">
                      Monthly Water Consumption
                    </label>
                    <span className="text-xs text-[#89CFF0] font-mono">
                      ~{(consumptionInput * 1000).toLocaleString()} LITERS
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min="0"
                      max="10000"
                      step="1"
                      value={consumptionInput}
                      onChange={(e) => setConsumptionInput(Math.max(0, Number(e.target.value) || 0))}
                      className="w-full bg-[#1A1A1A] text-white border-2 border-stone-800 rounded-2xl px-6 py-4 text-xl font-bold tabular-nums focus:border-[#89CFF0] focus:outline-hidden"
                    />
                    <span className="text-sm font-bold text-stone-500 uppercase tracking-wider shrink-0 w-32">
                      Cubic Meters
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-stone-600">
                    Note: The minimum charge covers up to the first 10 cu.m. Commodity charges apply only to volume exceeding 10 cu.m.
                  </div>
                </div>
              </div>

              {/* Itemized Calculation Card - Dark Mode */}
              <div className="lg:col-span-5 bg-[#0A0A0A] border border-stone-800 rounded-2xl p-8 space-y-5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#89CFF0]/5 rounded-full blur-3xl"></div>
                
                <div className="border-b border-stone-800 pb-4 flex items-center justify-between relative z-10">
                  <span className="text-xs font-bold tracking-widest uppercase text-stone-500">Itemized Breakdown</span>
                  <span className="text-xs text-[#89CFF0] font-bold bg-[#89CFF0]/10 px-3 py-1 rounded-full">{multipliers[customerClass].label}</span>
                </div>

                <div className="space-y-3 text-sm text-stone-400 relative z-10 font-mono">
                  <div className="flex justify-between items-center py-1">
                    <span>Min Charge (10 cu.m)</span>
                    <span className="tabular-nums text-white font-semibold">₱{baseMinCharge.toFixed(2)}</span>
                  </div>

                  {clampedUnits > 10 && (
                    <div className="flex justify-between items-center py-1 border-t border-stone-800">
                      <span>11–20 cu.m ({Math.min(Math.max(0, clampedUnits - 10), 10)} cu.m @ ₱{(19.25 * currentMultiplier).toFixed(2)})</span>
                      <span className="tabular-nums text-white">₱{tier11_20Cost.toFixed(2)}</span>
                    </div>
                  )}

                  {clampedUnits > 20 && (
                    <div className="flex justify-between items-center py-1 border-t border-stone-800">
                      <span>21–30 cu.m ({Math.min(Math.max(0, clampedUnits - 20), 10)} cu.m @ ₱{(20.20 * currentMultiplier).toFixed(2)})</span>
                      <span className="tabular-nums text-white">₱{tier21_30Cost.toFixed(2)}</span>
                    </div>
                  )}

                  {clampedUnits > 30 && (
                    <div className="flex justify-between items-center py-1 border-t border-stone-800">
                      <span>31–40 cu.m ({Math.min(Math.max(0, clampedUnits - 30), 10)} cu.m @ ₱{(21.70 * currentMultiplier).toFixed(2)})</span>
                      <span className="tabular-nums text-white">₱{tier31_40Cost.toFixed(2)}</span>
                    </div>
                  )}

                  {clampedUnits > 40 && (
                    <div className="flex justify-between items-center py-1 border-t border-stone-800">
                      <span>41+ cu.m ({Math.max(0, clampedUnits - 40)} cu.m @ ₱{(23.70 * currentMultiplier).toFixed(2)})</span>
                      <span className="tabular-nums text-white">₱{tier41UpCost.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="pt-6 mt-4 border-t-2 border-[#89CFF0]/30 flex flex-col items-end gap-1">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">
                      Estimated Total Bill
                    </span>
                    <span className="text-4xl font-black text-white tabular-nums tracking-tighter">
                      ₱{estimatedTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-800 text-[10px] text-stone-600 leading-relaxed uppercase tracking-wider relative z-10">
                  *Official Table 1.1 calculation. Does not include arrears or meter reconnection fees.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resolution Download / Print Footer */}
          <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <div className="flex items-center gap-2 uppercase tracking-widest">
              <FileText className="w-4 h-4 text-stone-600" />
              <span>Enacted Under: <strong>SB Resolution No. 052 & PD No. 198</strong></span>
            </div>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-stone-700 bg-[#111111] text-white font-bold hover:bg-stone-800 transition-colors cursor-pointer text-[10px] uppercase tracking-widest"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print Table 1.1 Tariff Schedule</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
