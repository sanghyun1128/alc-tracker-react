import React, { useEffect } from 'react';

interface Props {
  ref: React.RefObject<HTMLDivElement>;
  handler: () => void;
}

/**
 * Custom hook for detecting clicks outside the element.
 *
 * @param {Object} props
 * @param {React.RefObject<HTMLDivElement>} props.ref - ref object which will be used to detect clicks outside
 * @param {Function} props.handler - function to be called when clicked outside
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useOnClickOutside({ ref, handler: () => console.log('Clicked outside!') });
 * <div ref={ref}>Click outside of this element</div>
 */
export const useOnClickOutside = ({ ref, handler }: Props) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    window.addEventListener('mousedown', listener);

    return () => {
      window.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
