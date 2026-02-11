import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

export function useWindowSize() {
  const [size, setSize] = useState<[number, number]>(() => {
    if (typeof window === 'undefined') {
      return [1024, 768];
    }
    return [window.innerWidth, window.innerHeight];
  });
  const debouncedSize = useDebounce(size, 200);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return debouncedSize;
}
