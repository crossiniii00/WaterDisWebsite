export interface RateTier {
  tierNumber: number;
  label: string;
  rangeDescription: string;
  minCcf: number;
  maxCcf: number | null;
  ratePerCcf: number;
  ratePerThousandGallons: number;
  purpose: string;
}

export interface MeterBaseRate {
  meterSize: string;
  monthlyServiceFee: number;
  typicalUse: string;
}

export interface FacilityLocation {
  id: string;
  name: string;
  type: 'administrative' | 'treatment' | 'storage' | 'watershed';
  address: string;
  city: string;
  zip: string;
  publicAccess: boolean;
  hours: string;
  phone: string;
  description: string;
  features: string[];
}

export interface WaterQualityRecord {
  parameter: string;
  measuredAverage: string;
  stateLimitMcl: string;
  idealGoalPhg: string;
  units: string;
  sourceOfContaminant: string;
  status: 'In Compliance' | 'Optimal';
}

export interface PublicNotice {
  id: string;
  title: string;
  date: string;
  type: 'Maintenance' | 'Board Notice' | 'Conservation' | 'General';
  summary: string;
  affectedZone?: string;
  active: boolean;
}

export interface BoardMember {
  name: string;
  division: string;
  termExpires: string;
  committee: string;
}
