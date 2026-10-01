import { RateTier, MeterBaseRate, FacilityLocation, PublicNotice } from '../types';

export const DISTRICT_INFO = {
  name: 'San Isidro Water District',
  shortName: 'SIWD',
  tagline: 'Safe, Potable, Reliable & Sufficient Water Supply for San Isidro, Northern Samar',
  createdYear: 1995,
  sbResolution: 'SB Resolution No. 052',
  sbResolutionDate: 'December 18, 1995',
  legalBasis: 'Presidential Decree (PD) No. 198 (Provincial Water Utilities Act of 1973, as amended by PD No. 769)',
  headquartersAddress: 'Purok 2, Don Manuel Palop Street, Poblacion Norte, San Isidro, Northern Samar',
  activeConnectionsDate: 'February 4, 2026',
  totalActiveConnections: 516,
  residentialGovConnections: 353,
  commercialConnections: 163,
  sources: [
    { name: 'Happy Valley Spring', type: 'Spring Source' },
    { name: 'Sta. Teresita Spring', type: 'Spring Source' },
    { name: 'Canawayon River', type: 'Surface Water Source' },
  ],
  serviceAreaKm2: 255.90,
  serviceAreaHectares: 25590,
  serviceAreaSqMiles: 98.80,
  totalBarangays: 14,
  servedBarangays: [
    'San Juan',
    'Salvacion',
    'Alegria',
    'Balite',
    'Buenavista',
    'Poblacion Norte',
    'Poblacion Sur',
  ],
  unservedBarangays: [
    'Balanog',
    'Caglanipao',
    'Caparisan',
    'Daja',
    'Palapag',
    'San Isidro Rural',
    'Veriato',
  ],
  governance: {
    headOfAgency: 'Board of Directors',
    boardSectors: ['Business', 'Professional', "Women's", 'Education', 'Civic'],
    administration: 'General Manager',
    departments: ['Administrative', 'Customer Service', 'Maintenance'],
    totalEmployees: 6,
    regularStaff: 2,
    jobOrderStaff: 4,
  },
  emergencyPhone: '(055) 543-9120',
  mainPhone: '(055) 543-9125',
  generalEmail: 'siwd.northernsamar@gmail.com',
};

// 1.2 Our Mission, Our Vision and Core Values
export const MISSION_STATEMENT = 
  'We are committed to be a customer service-oriented utility that is concerned with the preservation of our natural resources.';

export const VISION_STATEMENT = 
  'To be an excellent water utility providing potable and sustainable water with efficient and economically viable service and ensuring the preservation of our natural resources.';

export const CORE_VALUES = [
  {
    title: 'Commitment',
    description:
      'Dedicated to providing safe, potable, reliable, and sufficient water supply to the constituents of San Isidro.',
    iconName: 'Shield',
  },
  {
    title: 'Teamwork',
    description:
      'Harmonious collaboration between policy leadership, the General Manager, and administrative, customer service, and maintenance teams.',
    iconName: 'Users',
  },
  {
    title: 'Environmental Stewardship',
    description:
      'Active preservation and watershed protection of our natural springs at Happy Valley, Sta. Teresita, and the Canawayon River.',
    iconName: 'Droplets',
  },
];

// District Governing Principles
export const DISTRICT_PURPOSE_PILLARS = [
  {
    code: '01',
    title: 'Customer Service-Oriented Utility',
    description:
      'Prompt response and dedicated public service across all 516 active metered connections in San Isidro, Northern Samar.',
  },
  {
    code: '02',
    title: 'Preservation of Natural Resources',
    description:
      'Preserving pristine spring recharge catchments at Happy Valley and Sta. Teresita, along with Canawayon River surface flows.',
  },
  {
    code: '03',
    title: 'Economically Viable Cost-of-Service',
    description:
      'Maintaining approved lifeline rates starting at ₱185.00 for the first 10 cu.m without commercial profit markups.',
  },
  {
    code: '04',
    title: 'Sound Local Water Governance',
    description:
      'Policy leadership by a 5-sector Board of Directors (Business, Professional, Women, Education, Civic) enacted under PD 198.',
  },
];

// Table 1.1 San Isidro Water Rates
export const TABLE_1_1_RATES = {
  minimumCharge: {
    volumeThreshold: 'First 10 cu.m',
    rate: 185.00,
    ratePerCumEquivalent: 18.50,
  },
  commodityCharges: [
    {
      range: '11 – 20 cu.m',
      minVolume: 11,
      maxVolume: 20,
      ratePerCum: 19.25,
      description: 'Standard household consumption tier',
    },
    {
      range: '21 – 30 cu.m',
      minVolume: 21,
      maxVolume: 30,
      ratePerCum: 20.20,
      description: 'Moderate domestic & light commercial tier',
    },
    {
      range: '31 – 40 cu.m',
      minVolume: 31,
      maxVolume: 40,
      ratePerCum: 21.70,
      description: 'Higher volume tier',
    },
    {
      range: '41 cu.m and up',
      minVolume: 41,
      maxVolume: null,
      ratePerCum: 23.70,
      description: 'Maximum consumption conservation tier',
    },
  ],
  commercialFactors: [
    { classification: 'Commercial (Standard)', factor: 2.00, minimumCharge: 370.00 },
    { classification: 'Commercial A', factor: 1.25, minimumCharge: 231.25 },
    { classification: 'Commercial B', factor: 1.50, minimumCharge: 277.50 },
    { classification: 'Commercial C', factor: 1.75, minimumCharge: 323.75 },
  ],
};

export const RESIDENTIAL_TIERS: RateTier[] = [
  {
    tierNumber: 1,
    label: 'Minimum Charge (Lifeline)',
    rangeDescription: 'First 10 cu.m (0 – 2,641 gal)',
    minCcf: 1,
    maxCcf: 10,
    ratePerCcf: 18.50, // ₱185.00 for 10 cu.m
    ratePerThousandGallons: 70.00,
    purpose: 'Essential domestic consumption: cooking, basic sanitation, and daily hydration (₱185.00 flat minimum).',
  },
  {
    tierNumber: 2,
    label: 'Commodity Charge (11–20)',
    rangeDescription: '11 to 20 cu.m',
    minCcf: 11,
    maxCcf: 20,
    ratePerCcf: 19.25,
    ratePerThousandGallons: 72.85,
    purpose: 'Standard residential household consumption.',
  },
  {
    tierNumber: 3,
    label: 'Commodity Charge (21–30)',
    rangeDescription: '21 to 30 cu.m',
    minCcf: 21,
    maxCcf: 30,
    ratePerCcf: 20.20,
    ratePerThousandGallons: 76.45,
    purpose: 'Moderate consumption tier for larger households.',
  },
  {
    tierNumber: 4,
    label: 'Commodity Charge (31–40)',
    rangeDescription: '31 to 40 cu.m',
    minCcf: 31,
    maxCcf: 40,
    ratePerCcf: 21.70,
    ratePerThousandGallons: 82.15,
    purpose: 'Higher volume residential tier.',
  },
  {
    tierNumber: 5,
    label: 'Commodity Charge (41 & up)',
    rangeDescription: '41 cu.m and above',
    minCcf: 41,
    maxCcf: null,
    ratePerCcf: 23.70,
    ratePerThousandGallons: 89.70,
    purpose: 'Conservation tier encouraging water preservation.',
  },
];

export const COMMERCIAL_TIERS: RateTier[] = [
  {
    tierNumber: 1,
    label: 'Commercial Standard (2.00x)',
    rangeDescription: 'Standard commercial factor (2.00x residential rate)',
    minCcf: 1,
    maxCcf: null,
    ratePerCcf: 38.50,
    ratePerThousandGallons: 145.70,
    purpose: 'General commercial businesses, trade establishments, and services.',
  },
  {
    tierNumber: 2,
    label: 'Commercial A (1.25x)',
    rangeDescription: 'Small retail / micro-enterprises (1.25x factor)',
    minCcf: 1,
    maxCcf: null,
    ratePerCcf: 24.06,
    ratePerThousandGallons: 91.05,
    purpose: 'Sari-sari stores, small bakeries, and cottage businesses.',
  },
  {
    tierNumber: 3,
    label: 'Commercial B (1.50x)',
    rangeDescription: 'Medium commercial / eateries (1.50x factor)',
    minCcf: 1,
    maxCcf: null,
    ratePerCcf: 28.88,
    ratePerThousandGallons: 109.30,
    purpose: 'Eateries, cafes, clinics, and professional offices.',
  },
  {
    tierNumber: 4,
    label: 'Commercial C (1.75x)',
    rangeDescription: 'High water-use commercial (1.75x factor)',
    minCcf: 1,
    maxCcf: null,
    ratePerCcf: 33.69,
    ratePerThousandGallons: 127.50,
    purpose: 'Car wash, hotels, laundries, and institutions.',
  },
];

export const IRRIGATION_TIERS: RateTier[] = [
  {
    tierNumber: 1,
    label: 'Government & Institutional',
    rangeDescription: 'Public schools, municipal halls, clinics (part of 353 active accounts)',
    minCcf: 1,
    maxCcf: null,
    ratePerCcf: 19.25,
    ratePerThousandGallons: 72.85,
    purpose: 'Public government facilities and community public centers.',
  },
];

export const METER_BASE_RATES: MeterBaseRate[] = [
  { meterSize: '1/2 inch (15mm)', monthlyServiceFee: 185.00, typicalUse: 'Standard Residential Connection (First 10 cu.m Minimum)' },
  { meterSize: '3/4 inch (20mm)', monthlyServiceFee: 277.50, typicalUse: 'Commercial B / Multi-Family (1.50x Factor)' },
  { meterSize: '1 inch (25mm)', monthlyServiceFee: 370.00, typicalUse: 'Commercial Standard (2.00x Factor)' },
];

export const DISTRICT_FACILITIES: FacilityLocation[] = [
  {
    id: 'siwd-hq',
    name: 'San Isidro Water District Main Office',
    type: 'administrative',
    address: 'Purok 2, Don Manuel Palop Street, Poblacion Norte',
    city: 'San Isidro, Northern Samar',
    zip: '6409',
    publicAccess: true,
    hours: 'Mon – Fri: 8:00 AM – 5:00 PM',
    phone: '(055) 543-9125',
    description: 'Main headquarters housing the Office of the General Manager, Administrative, Customer Service, and Maintenance personnel.',
    features: ['Customer Public Desk', 'Payment Clearing Information', 'Service Connection Application', 'Office of General Manager'],
  },
  {
    id: 'happy-valley-spring',
    name: 'Happy Valley Spring Source & Intake',
    type: 'watershed',
    address: 'Happy Valley Watershed Reserve',
    city: 'San Isidro, Northern Samar',
    zip: '6409',
    publicAccess: false,
    hours: '24/7 Natural Gravity Spring Catchment',
    phone: '(055) 543-9120',
    description: 'Primary natural spring water source providing potable and naturally filtered water directly to the San Isidro distribution network.',
    features: ['Natural Mountain Spring', 'Springhead Catchment Box', 'Protected Watershed Buffer', 'Gravity Transmission'],
  },
  {
    id: 'sta-teresita-spring',
    name: 'Sta. Teresita Spring Source & Filtration',
    type: 'watershed',
    address: 'Barangay Sta. Teresita Catchment Area',
    city: 'San Isidro, Northern Samar',
    zip: '6409',
    publicAccess: false,
    hours: '24/7 Protected Springhead Facility',
    phone: '(055) 543-9120',
    description: 'Second major natural spring source supplying clean raw water to Poblacion Sur, Buenavista, and surrounding barangays.',
    features: ['High-Yield Natural Spring', 'Multi-Barrier Filtration', 'Sanitary Springhead Seal', 'Protected Perimeter'],
  },
  {
    id: 'canawayon-surface-water',
    name: 'Canawayon River Surface Water Facility',
    type: 'treatment',
    address: 'Canawayon River Intake Station',
    city: 'San Isidro, Northern Samar',
    zip: '6409',
    publicAccess: false,
    hours: '24/7 Monitored River Intake',
    phone: '(055) 543-9120',
    description: 'Surface water extraction and treatment facility ensuring sufficient supplemental water volume for all municipal consumers.',
    features: ['River Intake Weir', 'Sedimentation Basins', 'Turbidity Monitoring', 'Supplementary Supply Hub'],
  },
];

export const PUBLIC_NOTICES: PublicNotice[] = [
  {
    id: 'notice-2026-01',
    title: 'Maintenance Advisory: Line Flushing in Poblacion Norte & Poblacion Sur',
    date: 'February 2026',
    type: 'Maintenance',
    summary: 'SIWD maintenance personnel will conduct periodic mainline flushing and valve inspection across Poblacion Norte and Poblacion Sur to ensure clear pressure delivery.',
    affectedZone: 'Poblacion Norte & Poblacion Sur',
    active: true,
  },
  {
    id: 'notice-2026-02',
    title: 'Official Meter Census: 516 Active Connections Documented',
    date: 'February 4, 2026',
    type: 'General',
    summary: 'San Isidro Water District confirms 516 active metered connections across 7 served barangays (353 residential/government, 163 commercial) supplied by Happy Valley, Sta. Teresita, and Canawayon River.',
    affectedZone: 'District-wide',
    active: true,
  },
  {
    id: 'notice-2026-03',
    title: 'Watershed Stewardship Campaign: Protecting Happy Valley & Sta. Teresita',
    date: 'Fiscal Year 2026',
    type: 'Conservation',
    summary: 'In accordance with our core value of Environmental Stewardship, constituents are reminded that forest zones surrounding spring sources are strictly protected against agricultural dumping.',
    affectedZone: 'Happy Valley & Sta. Teresita Watersheds',
    active: true,
  },
];
