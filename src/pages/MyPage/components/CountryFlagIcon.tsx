import React from 'react';

import { Tooltip } from 'react-tooltip';
import { styled } from 'styled-components';

import { FlagIcons, FlagIconType } from '../../../assets/svg/flag';

const Container = styled.div`
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  /* Box model */
  height: 1em;
  width: auto;

  /* Visuals */
  overflow: hidden;

  /* Interaction / content sizing */
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

interface CountryFlagIconProps {
  region: string;
  description?: string;
}

/**
 * CountryFlagIcon displays a country's flag based on the given region code.
 * Icon sizes are responsive to the font size of the parent element.
 * So you need to wrap this component in a container with the desired font size.
 *
 * @param {CountryFlagProps} props
 * @param {String} props.region - name of the region to be displayed and used as the id of the button
 * region names are defined in src/assets/svg/flag/index.ts
 * @param {String} props.description - description for the flag icon, shown as a tooltip on hover
 */
export default function CountryFlagIcon({
  region,
  description,
}: CountryFlagIconProps) {
  let FlagIcon = FlagIcons[region.toUpperCase()] as FlagIconType;

  if (!FlagIcon) {
    FlagIcon = FlagIcons.OTHER;
  }

  return (
    <Container>
      <FlagIcon
        data-tooltip-id="tooltip"
        data-tooltip-content={description || ''}
      />

      <Tooltip id="tooltip" place="top" />
    </Container>
  );
}
