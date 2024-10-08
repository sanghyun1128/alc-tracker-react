import React from 'react';

import { styled } from 'styled-components';

import { Icons, IconType } from '../../assets/svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IconLabelProps {
  icon: string;
  size: number;
  style?: React.CSSProperties;
}

/**
 * @param {IconLabelProps} props
 * @param {String} props.icon name of the icon to be displayed and used as the id of the button
 * icon names are defined in src/assets/svg/index.ts
 * @param {Number} props.size size of the icon
 * @param {Object} props.style React.CSSProperties to be applied to the icon
 */
export default function IconLabel({ icon, size, style = {} }: IconLabelProps) {
  let Icon = Icons[icon] as IconType;

  if (!Icon) {
    Icon = Icons.FILE_EMPTY;
  }

  return (
    <Container style={{ ...style, width: `${size}px`, height: `${size}px` }}>
      <Icon width={size} height={size} />
    </Container>
  );
}
