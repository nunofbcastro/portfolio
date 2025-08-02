import { useState, useLayoutEffect } from 'react';
import { useDebounce } from './useDebounce';

export function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const debouncedSize = useDebounce(size, 200); // Debounce with 200ms

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return debouncedSize;
}