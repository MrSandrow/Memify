import { useState, useEffect, useLayoutEffect } from 'react';

const useResize = (wrapperRef: HTMLDivElement | null) => {
  const [initialCanvasSize, setInitialCanvasSize] = useState<number | null>(null);
  const [currentCanvasSize, setCurrentCanvasSize] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (!wrapperRef) return;

    const wrapperWidth = Math.floor(wrapperRef.getBoundingClientRect().width);
    const wrapperHeight = Math.floor(wrapperRef.getBoundingClientRect().height);
    const wrapperSize = Math.min(wrapperWidth, wrapperHeight);

    setInitialCanvasSize(wrapperSize);
    setCurrentCanvasSize(wrapperSize);
  }, [wrapperRef]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

    function handleResize() {
      if (!wrapperRef) return;

      const wrapperWidth = Math.floor(wrapperRef.getBoundingClientRect().width);
      const wrapperHeight = Math.floor(wrapperRef.getBoundingClientRect().height);
      const wrapperSize = Math.min(wrapperWidth, wrapperHeight);

      setCurrentCanvasSize(wrapperSize);
    }
  }, [wrapperRef]);

  return { initialCanvasSize, currentCanvasSize };
};

export default useResize;
