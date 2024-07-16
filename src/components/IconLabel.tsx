import React from 'react';

import { Icons, IconType } from '../assets/svg';

interface IconLabelProps {
  icon: keyof typeof Icons;
  size: number;
  style?: React.CSSProperties;
}

/**
 * @param {IconLabelProps} props
 * @param {String} props.icon name of the icon to be displayed and used as the id of the button
 * @param {Number} props.size size of the icon
 * @param {Object} props.style React.CSSProperties to be applied to the icon
 */
export default function IconLabel({ icon, size, style = {} }: IconLabelProps) {
  const Icon = Icons[icon] as IconType;

  return (
    <Icon
      width={size}
      height={size}
      style={{
        ...style,
        borderRadius: '50%',
        padding: '10px',
      }}
    />
  );
}
