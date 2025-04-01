import React from 'react';

import { FlagIcons, FlagIconType } from '../../../assets/svg/flag';

interface CountryFlagIconProps {
  region: string;
  size: number;
}

/**
 * @param {CountryFlagProps} props
 * @param {String} props.region - name of the region to be displayed and used as the id of the button
 * region names are defined in src/assets/svg/flag/index.ts
 * @param {Number} props.size - size of the icon
 */
export default function CountryFlagIcon({
  region,
  size,
}: CountryFlagIconProps) {
  let FlagIcon = FlagIcons[region.toUpperCase()] as FlagIconType;

  if (!FlagIcon) {
    FlagIcon = FlagIcons.OTHER;
  }

  return <FlagIcon width={size} height={size} />;
}
