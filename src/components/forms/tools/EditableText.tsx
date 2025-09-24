import React, { useEffect, useMemo, useRef, useState } from 'react';

import { styled } from 'styled-components';

import TextUpdateAnimation from '../../../animations/TextUpdateAnimation';

const DisplayText = styled.span`
  /* Layout */
  display: inline-block;

  /* Box model */
  margin: 0;
  padding: ${props => props.theme.padding} 0;

  /* Typography */
  font-family: inherit;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

const InlineInput = styled.input`
  /* Layout */
  display: inline-block;
  width: 100%;
  min-width: 0;

  /* Box model */
  box-sizing: border-box;
  margin: 0;
  padding: ${props => props.theme.padding} 0;
  border: none;
  border-radius: ${props => props.theme.borderRadius};

  /* Visuals */
  background-color: ${props => props.theme.colors.inputBackground};

  /* Typography */
  color: ${props => props.theme.colors.text};
  font: inherit; /* size, family */
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;

  /* Interaction */
  outline: none;
  -webkit-appearance: none;
  appearance: none;
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
 * @param {EditableTextProps} props
 * @param {String} props.value - The saved value to display in view mode.
 * @param {String} props.draftValue - The draft value to display in edit mode.
 * @param {Boolean} props.editing - Flag indicating whether the component is in edit mode.
 * @param {String} props.placeholder - Placeholder text to show when editing and the draft is empty.
 * @param {Number} props.maxLength - Maximum length for the input while editing. Default is 100.
 * @param {React.ElementType} props.as - The HTML element or React component to render the text as in view mode.
 * @param {Function} props.onDraftChange - Callback function to handle changes to the draft value.
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
      <DisplayText as={as}>
        <InlineInput
          placeholder={placeholder}
          maxLength={maxLength}
          value={draftValue}
          onChange={e => onDraftChange(e.target.value)}
        />
      </DisplayText>
    );
  }

  if (anim) {
    return <TextUpdateAnimation text={value || ''} as={as} />;
  }

  return <DisplayText as={as}>{value || ''}</DisplayText>;
}
