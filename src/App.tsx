/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedOperations } from './components/FeaturedOperations';
import { MissionVision } from './components/MissionVision';
import { RatesSection } from './components/RatesSection';
import { LocationsSection } from './components/LocationsSection';
import { NoticesAndStatus } from './components/NoticesAndStatus';
import { Footer } from './components/Footer';
import { BillingNoticeModal } from './components/BillingNoticeModal';

export default function App() {
  const [billingModalOpen, setBillingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#0056B3] selection:text-white">
      {/* Chevron-inspired Navigation */}
      <Navbar onOpenBillingModal={() => setBillingModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <MissionVision />
        <FeaturedOperations />
        <RatesSection onOpenBillingModal={() => setBillingModalOpen(true)} />
        <LocationsSection />
        <NoticesAndStatus />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenBillingModal={() => setBillingModalOpen(true)} />

      {/* Dedicated Billing Separation Advisory Modal */}
      <BillingNoticeModal
        isOpen={billingModalOpen}
        onClose={() => setBillingModalOpen(false)}
      />
    </div>
  );
}
