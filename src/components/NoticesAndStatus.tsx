import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PUBLIC_NOTICES, DISTRICT_INFO } from '../data/districtData';
import { Bell, ShieldAlert, Send, CheckCircle2 } from 'lucide-react';

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

export const NoticesAndStatus: React.FC = () => {
  const [reportBarangay, setReportBarangay] = useState('Poblacion Norte');
  const [reportIssueType, setReportIssueType] = useState('Water Leak');
  const [reportDetails, setReportDetails] = useState('');
  const [reportContact, setReportContact] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportDetails.trim()) return;
    setReportSubmitted(true);
  };

  const handleResetForm = () => {
    setReportBarangay('Poblacion Norte');
    setReportDetails('');
    setReportContact('');
    setReportSubmitted(false);
  };

  return (
    <section id="notices" className="bg-[#F8FAFC] text-stone-900 border-b border-stone-200 overflow-hidden font-sans">
      
      {/* Massive Chevron-style Green Section Header Banner */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
        className="w-full bg-[#004D2E] text-center py-20 md:py-28 px-6 relative z-10 border-t-[8px] border-[#D4E157]"
      >
        <span className="text-white/90 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 block">
          San Isidro Water District Operations
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-[80px] font-black text-[#D4E157] tracking-tighter leading-[0.95] mb-6 drop-shadow-md">
          Public notices &<br />maintenance
        </h2>
        <p className="text-sm md:text-base text-white max-w-3xl mx-auto leading-relaxed font-medium mt-6">
          Service advisories, spring source protection reminders, and field maintenance logs for our 516 active metered connections across San Isidro, Northern Samar.
        </p>
      </motion.div>

      <div className="py-16 sm:py-20 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Public Notices List: Crisp White Cards with Blue & Green Accents */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-[#0052CC]" />
              <span>Active District Advisories ({PUBLIC_NOTICES.length})</span>
            </h3>

            {PUBLIC_NOTICES.map((notice) => (
              <motion.div
                key={notice.id}
                initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
                className="bg-white border-2 border-stone-200 rounded-3xl p-6 shadow-xs hover:border-[#0052CC] hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-3">
                  <span className="text-xs font-bold text-white bg-[#0052CC] px-3 py-0.5 rounded-full shadow-xs group-hover:opacity-80 transition-opacity">
                    {notice.type} Notice
                  </span>
                  <span className="text-xs font-semibold text-stone-400">
                    {notice.date}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-2 leading-snug">
                  {notice.title}
                </h4>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 font-normal group-hover:opacity-80 transition-opacity">
                  {notice.summary}
                </p>

                {notice.affectedZone && (
                  <div className="text-xs text-stone-500 border-t border-stone-100 pt-3 flex items-center justify-between">
                    <span>Scope: <strong className="text-stone-900">{notice.affectedZone}</strong></span>
                    <span className="text-[#00A859] font-bold">✓ Active Status</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Emergency & Maintenance Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Maintenance Hotline Card: Deep Black Frame with Green & White */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
              className="bg-[#0A0F1D] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-stone-800"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#00E676] mb-2 uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-[#00E676]" />
                San Isidro Maintenance Unit
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Water Line Leaks & Low Pressure
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed mb-4 font-normal">
                To report active pipe bursts, broken valves, or unexpected pressure drops in your barangay, contact our maintenance team:
              </p>
              <div className="bg-[#14233D] border border-blue-900/60 rounded-2xl p-4 text-center mb-3">
                <div className="text-xs text-[#00E676] uppercase tracking-widest mb-1 font-bold">
                  Maintenance & Leak Dispatch
                </div>
                <div className="text-2xl font-black text-white tracking-wider hover:opacity-80 transition-opacity">
                  {DISTRICT_INFO.emergencyPhone}
                </div>
              </div>
              <div className="text-xs text-stone-400 text-center font-normal">
                Supervised by the General Manager & Maintenance Team.
              </div>
            </motion.div>

            {/* Public Leak Reporting Form: Pure White Card with Blue Button */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
              className="bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-7 shadow-xs"
            >
              <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-1">
                Report a Leak or Water Concern
              </h4>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed font-normal">
                Log a maintenance observation for inspection by our customer service and field crew.
              </p>

              <AnimatePresence>
                {reportSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2"
                  >
                    <CheckCircle2 className="w-9 h-9 text-[#00A859] mx-auto" />
                    <p className="text-sm font-bold text-emerald-900">
                      Maintenance Report Logged
                    </p>
                    <p className="text-xs text-emerald-700">
                      Thank you. Your report for {reportBarangay} has been queued for our maintenance team.
                    </p>
                    <button
                      onClick={handleResetForm}
                      className="mt-2 text-xs text-[#0052CC] underline font-bold cursor-pointer hover:opacity-75 transition-opacity"
                    >
                      Submit another report
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmitReport} 
                    className="space-y-3.5 text-xs"
                  >
                    <div>
                      <label className="block text-stone-700 font-bold mb-1">
                        Barangay Location
                      </label>
                      <select
                        value={reportBarangay}
                        onChange={(e) => setReportBarangay(e.target.value)}
                        className="w-full border border-stone-300 bg-stone-50 rounded-xl px-3 py-2 text-stone-800 text-xs focus:bg-white focus:border-[#0052CC] focus:outline-hidden"
                      >
                        {DISTRICT_INFO.servedBarangays.map((bgry) => (
                          <option key={bgry} value={bgry}>
                            Barangay {bgry}
                          </option>
                        ))}
                        <option value="Other Area">Other Barangay (Expansion Area)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-stone-700 font-bold mb-1">
                        Observation Type
                      </label>
                      <select
                        value={reportIssueType}
                        onChange={(e) => setReportIssueType(e.target.value)}
                        className="w-full border border-stone-300 bg-stone-50 rounded-xl px-3 py-2 text-stone-800 text-xs focus:bg-white focus:border-[#0052CC] focus:outline-hidden"
                      >
                        <option value="Water Leak">Surface Water Leak / Pipe Burst</option>
                        <option value="Low Pressure">Low Water Pressure</option>
                        <option value="Meter Concern">Meter Connection / Leak at Meter</option>
                        <option value="Water Quality">Water Clarity / Sediment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-stone-700 font-bold mb-1">
                        Purok, Street, or Landmark
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Purok 2, near municipal gym"
                        value={reportDetails}
                        onChange={(e) => setReportDetails(e.target.value)}
                        className="w-full border border-stone-300 bg-stone-50 rounded-xl px-3 py-2 text-stone-800 text-xs focus:bg-white focus:border-[#0052CC] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-700 font-bold mb-1">
                        Contact Number (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="For maintenance verification"
                        value={reportContact}
                        onChange={(e) => setReportContact(e.target.value)}
                        className="w-full border border-stone-300 bg-stone-50 rounded-xl px-3 py-2 text-stone-800 text-xs focus:bg-white focus:border-[#0052CC] focus:outline-hidden"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0052CC] hover:bg-[#003d99] text-white font-bold py-2.5 rounded-xl transition-opacity cursor-pointer flex items-center justify-center gap-1.5 shadow-xs hover:opacity-90"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit to Maintenance Desk</span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
