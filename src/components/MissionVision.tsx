import React from 'react';
import { motion } from 'motion/react';
import { 
  MISSION_STATEMENT, 
  VISION_STATEMENT, 
  CORE_VALUES,
  DISTRICT_INFO 
} from '../data/districtData';
import { Compass, Shield, Users, Droplets, Landmark, ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets/images';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const slideUpItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

export const MissionVision: React.FC = () => {
  return (
    <section id="purpose" className="bg-white text-stone-900 font-sans overflow-hidden">
      
      {/* Massive 'Who We Are' Image-Clipped Header */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ amount: 0.2 }}
        variants={staggerContainer}
        className="w-full bg-white text-center py-20 md:py-32 px-6 relative z-10"
      >
        <motion.h2 
          variants={slideUpItem}
          className="text-7xl sm:text-8xl md:text-[120px] font-black tracking-tighter mb-8"
          style={{
            backgroundImage: `url(${IMAGES.treatmentFacility})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Who we are
        </motion.h2>
        <motion.p variants={slideUpItem} className="text-sm md:text-base text-stone-700 max-w-2xl mx-auto leading-relaxed font-medium">
          Water drives human progress and creates positive change for modern society. We work hard to deliver safe, clean water that can improve the lives of thousands of people across San Isidro.
        </motion.p>
      </motion.div>

      {/* Massive Full-Width Purpose Divider (Black) */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ amount: 0.2 }}
        variants={staggerContainer}
        className="w-full bg-[#111111] text-center py-20 md:py-28 px-6 relative z-10 border-t-[8px] border-[#89CFF0]"
      >
        <motion.span variants={slideUpItem} className="text-white/90 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 block">
          Strategic Operations
        </motion.span>
        <motion.h2 variants={slideUpItem} className="text-5xl sm:text-7xl md:text-[90px] font-black text-white tracking-tighter leading-[0.95] mb-6 drop-shadow-md">
          Our purpose
        </motion.h2>
        <motion.p variants={slideUpItem} className="text-sm md:text-base text-stone-300 max-w-3xl mx-auto leading-relaxed font-medium mt-6">
          Created on December 18, 1995 through Sangguniang Bayan (SB) Resolution No. 052 under Presidential Decree No. 198, to improve the entire water system and provide safe, potable, reliable, and sufficient water supply to the constituents of San Isidro.
        </motion.p>
      </motion.div>

      <div className="py-16 sm:py-24 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* Chevron-style Split Cards (Mission) */}
        <div className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-12">
          {/* Image Side */}
          <div className="w-full md:w-1/2 h-[350px] md:h-auto">
            <img 
              src={IMAGES.qualityLab} 
              alt="Quality Lab" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Blue Solid Side */}
          <div className="w-full md:w-1/2 bg-[#254A8D] p-10 md:p-14 lg:p-20 flex flex-col justify-center text-white">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
              Our way is The San Isidro Way
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-blue-50 font-medium mb-8">
              We're a dedicated team united by what we believe. "{MISSION_STATEMENT}" Our vision and purpose drives how we work. And together we're working to advance a sustainable future.
            </p>
            <a href="#locations" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-200 transition-colors group">
              See The San Isidro Way 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Chevron-style Split Cards (Vision - reversed) */}
        <div className="flex flex-col md:flex-row-reverse w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-20">
          {/* Image Side */}
          <div className="w-full md:w-1/2 h-[350px] md:h-auto">
            <img 
              src={IMAGES.heroReservoir} 
              alt="Reservoir" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Green Solid Side */}
          <div className="w-full md:w-1/2 bg-[#577A38] p-10 md:p-14 lg:p-20 flex flex-col justify-center text-white">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
              Our vision for the future
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-stone-100 font-medium mb-8">
              "{VISION_STATEMENT}" We aim to be an excellent water utility providing potable and sustainable water with efficient and economically viable service.
            </p>
            <a href="#purpose" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-green-200 transition-colors group">
              Explore our vision 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        </div>

      {/* Massive Full-Width Core Values Divider (Blue) */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ amount: 0.2 }}
        variants={staggerContainer}
        className="w-full bg-[#003B7E] border-t-[8px] border-[#89CFF0] text-center py-20 md:py-28 px-6 relative z-10"
      >
        <motion.span variants={slideUpItem} className="text-white/90 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 block">
          Core principles
        </motion.span>
        <motion.h2 variants={slideUpItem} className="text-5xl sm:text-7xl md:text-[90px] font-black text-white tracking-tighter leading-[0.95] drop-shadow-sm">
          Core Values
        </motion.h2>
        <motion.p variants={slideUpItem} className="text-sm md:text-base text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium mt-6">
          Our core values are the foundation of our organization. They guide our operational standards, shape our workplace culture, and drive our absolute commitment to delivering safe and reliable water to the people of San Isidro.
        </motion.p>
      </motion.div>

      <div className="w-full bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-20">
          
          <div className="space-y-12">
            
            {/* Core Value 1: Commitment (Blue) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
              className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]  transition-transform duration-500"
            >
              <div className="w-full md:w-1/2 h-[350px] md:h-auto overflow-hidden group">
                <img 
                  src={IMAGES.maintenance} 
                  alt="Commitment" 
                  className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 bg-[#003B7E] p-10 md:p-14 lg:p-20 flex flex-col justify-center text-white">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                   </div>
                   <span className="text-sm font-bold text-white/50 tracking-widest uppercase">01</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                  Commitment
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-blue-50 font-medium">
                  {CORE_VALUES[0].description}
                </p>
              </div>
            </motion.div>

            {/* Core Value 2: Teamwork (Black - Reversed) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
              className="flex flex-col md:flex-row-reverse w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]  transition-transform duration-500"
            >
              <div className="w-full md:w-1/2 h-[350px] md:h-auto overflow-hidden group">
                <img 
                  src={IMAGES.workerTeam} 
                  alt="Teamwork" 
                  className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 bg-[#111111] p-10 md:p-14 lg:p-20 flex flex-col justify-center text-white">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                   </div>
                   <span className="text-sm font-bold text-white/50 tracking-widest uppercase">02</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                  Teamwork
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-stone-300 font-medium">
                  {CORE_VALUES[1].description}
                </p>
              </div>
            </motion.div>

            {/* Core Value 3: Environmental Stewardship (Green) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
              className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]  transition-transform duration-500"
            >
              <div className="w-full md:w-1/2 h-[350px] md:h-auto overflow-hidden group">
                <img 
                  src={IMAGES.watershedCatchment} 
                  alt="Environmental Stewardship" 
                  className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 bg-[#004D2E] p-10 md:p-14 lg:p-20 flex flex-col justify-center text-white">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-white" />
                   </div>
                   <span className="text-sm font-bold text-white/50 tracking-widest uppercase">03</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                  Environmental Stewardship
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-emerald-50 font-medium">
                  {CORE_VALUES[2].description}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Massive Chevron-style Expansion Section (Governance) Banner (Green) */}
      <div className="w-full bg-[#004D2E] text-center py-20 md:py-28 px-6 relative z-10 border-t-[8px] border-[#D4E157]">
        <span className="text-white/90 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 block">
          Established 1995
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-[90px] font-black text-[#D4E157] tracking-tighter leading-[0.95] mb-6 drop-shadow-md">
          Strategic<br />Operations
        </h2>
        <p className="text-sm md:text-base text-white max-w-2xl mx-auto leading-relaxed font-medium mt-6">
          Administered by our General Manager with a 5-sector Board of Directors representing Business, Professional, Women, Education, and Civic sectors.
        </p>
      </div>
      
      <div className="w-full bg-[#F8FAFC] py-20 relative overflow-hidden border-t border-stone-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
           
           <div className="space-y-12">
              
              {/* Strategic Operations 1: Board of Directors (Green) */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
                className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]  transition-transform duration-500"
              >
                <div className="w-full md:w-1/2 h-[350px] md:h-auto overflow-hidden group">
                  <img 
                    src={IMAGES.officeTeam} 
                    alt="Board of Directors" 
                    className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-500"
                  />
                </div>
                <div className="w-full md:w-1/2 bg-[#004D2E] p-10 md:p-14 lg:p-20 flex flex-col justify-center text-white">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Landmark className="w-5 h-5 text-white" />
                     </div>
                     <span className="text-sm font-bold text-white/50 tracking-widest uppercase">01</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                    Board of Directors
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-emerald-50 font-medium">
                    Handles policy formulation and decision making. Composed of five members representing Business, Professional, Women, Education, and Civic sectors in the community.
                  </p>
                </div>
              </motion.div>

              {/* Strategic Operations 2: Office of the GM (Black - Reversed) */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
                className="flex flex-col md:flex-row-reverse w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]  transition-transform duration-500"
              >
                <div className="w-full md:w-1/2 h-[350px] md:h-auto overflow-hidden group">
                  <img 
                    src={IMAGES.filipinoCommunity} 
                    alt="Office of the General Manager" 
                    className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-500"
                  />
                </div>
                <div className="w-full md:w-1/2 bg-[#111111] p-10 md:p-14 lg:p-20 flex flex-col justify-center text-white">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Compass className="w-5 h-5 text-white" />
                     </div>
                     <span className="text-sm font-bold text-white/50 tracking-widest uppercase">02</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                    Office of the GM
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-stone-300 font-medium">
                    Administers overall supervision of operation and maintenance. Directly heads the three operating departments to ensure efficient water service delivery.
                  </p>
                </div>
              </motion.div>

              {/* Strategic Operations 3: Dedicated Personnel (Blue) */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInOut}
                className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]  transition-transform duration-500"
              >
                <div className="w-full md:w-1/2 h-[350px] md:h-auto overflow-hidden group">
                  <img 
                    src={IMAGES.maintenance} 
                    alt="Dedicated Personnel" 
                    className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-500"
                  />
                </div>
                <div className="w-full md:w-1/2 bg-[#003B7E] p-10 md:p-14 lg:p-20 flex flex-col justify-center text-white">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                     </div>
                     <span className="text-sm font-bold text-white/50 tracking-widest uppercase">03</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                    Dedicated Personnel
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-blue-50 font-medium">
                    Actively managing 516 metered connections across San Isidro with two regular employees and four on job order, ensuring 24/7 reliability.
                  </p>
                </div>
              </motion.div>

           </div>

        </div>
      </div>
    </section>
  );
};

