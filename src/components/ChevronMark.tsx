import React from 'react';
import { DistrictSeal } from './DistrictSeal';

interface ChevronMarkProps {
  className?: string;
  size?: number;
}

export const ChevronMark: React.FC<ChevronMarkProps> = (props) => {
  return <DistrictSeal {...props} />;
};
