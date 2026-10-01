import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, AlertCircle, Phone, MapPin } from 'lucide-react';
import { DISTRICT_INFO } from '../data/districtData';
import { DistrictSeal } from './DistrictSeal';

interface BillingNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BillingNoticeModal: React.FC<BillingNoticeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans text-stone-800"
          role="dialog"
          aria-modal="true"
          aria-labelledby="billing-modal-title"
        >
          {/* Backdrop with Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs"
          />

          {/* Modal Container with Smooth Slide & Scale */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-2xl border border-stone-200 shadow-2xl p-6 md:p-8 z-10"
          >
            {/* Header Bar */}
            <div className="flex items-start justify-between border-b border-stone-200 pb-4 mb-6">
              <div className="flex items-center gap-3.5">
                <DistrictSeal className="w-12 h-12 shrink-0 drop-shadow-sm" />
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full px-2.5 py-0.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    San Isidro Water District
                  </div>
                  <h2 id="billing-modal-title" className="text-xl md:text-2xl font-bold text-stone-900">
                    Customer Billing & Office Information
                  </h2>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Close billing advisory modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <div className="bg-[#FAF9F6] border-l-4 border-[#0052CC] p-4 rounded-r-xl">
                <p className="font-semibold text-stone-900 mb-1">
                  San Isidro Water District Administration
                </p>
                <p>
                  <strong>{DISTRICT_INFO.name} ({DISTRICT_INFO.shortName})</strong> was established in 1995 under SB Resolution No. 052 and PD 198, serving 516 active metered connections across San Isidro, Northern Samar.
                </p>
                <p className="mt-2 text-stone-700 text-xs">
                  Water sources include Happy Valley Spring, Sta. Teresita Spring, and Canawayon River surface water facility.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="border border-stone-200 rounded-xl p-4 bg-white shadow-xs">
                  <h3 className="font-semibold text-stone-900 text-sm mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    Office Address & Walk-In
                  </h3>
                  <p className="text-xs text-stone-600 mb-2 leading-relaxed">
                    <strong>Purok 2, Don Manuel Palop Street</strong><br />
                    Poblacion Norte, San Isidro, Northern Samar
                  </p>
                  <p className="text-xs text-stone-500">
                    Hours: Monday – Friday: 8:00 AM – 5:00 PM
                  </p>
                </div>

                <div className="border border-stone-200 rounded-xl p-4 bg-white shadow-xs">
                  <h3 className="font-semibold text-stone-900 text-sm mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    Customer Assistance
                  </h3>
                  <p className="text-xs text-stone-600 mb-2">
                    For billing inquiries, new service connection applications, or meter inquiries:
                  </p>
                  <div className="text-xs text-stone-800 space-y-1">
                    <p>Phone: <strong>{DISTRICT_INFO.mainPhone}</strong></p>
                    <p>Email: <strong>{DISTRICT_INFO.generalEmail}</strong></p>
                    <p>Admin: Office of the General Manager</p>
                  </div>
                </div>
              </div>

              <div className="text-xs text-stone-500 pt-2 border-t border-stone-100 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-500" />
                <span>
                  Please present your latest water bill statement or account receipt when settling payments or filing connection requests.
                </span>
              </div>
            </div>

            {/* Footer button */}
            <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-stone-200">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
