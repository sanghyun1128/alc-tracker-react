import React, { useEffect, useMemo, useRef, useState } from 'react';

import styled from 'styled-components';

import TextUpdateAnimation from '../../../animations/TextUpdateAnimation';
import TextInput from './TextInput';

const DisplayText = styled.span`
  margin: 0;
  font-weight: bold;
  font-family: inherit;
`;

export interface EditableTextProps {
  value: string;
  draftValue: string;
  editing: boolean;
  placeholder: string;
  maxLength: number;
  as: React.ElementType;
  onDraftChange: (value: string) => void;
}

/**
 * EditableText switches between a TextInput (edit mode) and an animated text view.
 * Animation plays after exiting edit mode only when the saved value actually changed.
 *
 * @params {EditableTextProps} props
 * @params {String} props.value - The saved value to display in view mode.
 * @params {String} props.draftValue - The draft value to display in edit mode.
 * @params {Boolean} props.editing - Flag indicating whether the component is in edit mode.
 * @params {String} props.placeholder - Placeholder text to show when editing and the draft is empty.
 * @params {Number} props.maxLength - Maximum length for the input while editing. Default is 100.
 * @params {React.ElementType} props.as - The HTML element or React component to render the text as in view mode.
 * @params {Function} props.onDraftChange - Callback function to handle changes to the draft value.
 */
export default function EditableText({
  value,
  draftValue,
  onDraftChange,
  editing,
  placeholder,
  maxLength,
  as,
}: EditableTextProps) {
  const [anim, setAnim] = useState(false);
  const lastShownRef = useRef<string>(value);
  const wasEditingRef = useRef<boolean>(editing);

  // Derived: whether content actually changed since last non-edit view
  const changed = useMemo(() => value !== lastShownRef.current, [value]);

  useEffect(() => {
    const justExitedEdit = wasEditingRef.current && !editing;
    wasEditingRef.current = editing;

    if (justExitedEdit && changed) {
      // Start reveal animation
      setAnim(false);
      requestAnimationFrame(() => setAnim(true));

      // End animation after estimated duration
      const len = (value || '').length;
      const total = 500 + 25 * Math.max(0, len - 1) + 150;
      const t = setTimeout(() => setAnim(false), total);

      // Update last shown value once animation starts
      lastShownRef.current = value;

      return () => clearTimeout(t);
    }
  }, [editing, changed, value]);

  if (editing) {
    return (
      <TextInput
        placeholder={placeholder}
        maxLength={maxLength}
        isError={false}
        hideShowButton={false}
        style={{}}
        onChange={e => onDraftChange(e.target.value)}
        value={draftValue}
      />
    );
  }

  if (anim) {
    return <TextUpdateAnimation text={value || ''} as={as} />;
  }

  return <DisplayText as={as}>{value || ''}</DisplayText>;
}
