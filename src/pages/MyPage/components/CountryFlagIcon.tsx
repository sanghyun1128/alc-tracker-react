import React from 'react';

import { Tooltip } from 'react-tooltip';
import { styled } from 'styled-components';

import { FlagIcons, FlagIconType } from '../../../assets/svg/flag';

const Container = styled.div``;

interface CountryFlagIconProps {
  region: string;
  size: number;
  description?: string;
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
  description,
}: CountryFlagIconProps) {
  let FlagIcon = FlagIcons[region.toUpperCase()] as FlagIconType;

  if (!FlagIcon) {
    FlagIcon = FlagIcons.OTHER;
  }

  return (
    <Container>
      <FlagIcon
        width={size}
        height={size}
        data-tooltip-id="tooltip"
        data-tooltip-content={description || ''}
      />

      <Tooltip id="tooltip" place="top" />
    </Container>
  );
}
