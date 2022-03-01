import { useState, useEffect } from 'react';

const useBackground = (
  canvasRef: HTMLCanvasElement | null,
  contextRef: CanvasRenderingContext2D | null,
  background: Blob | null,
) => {
  const [backgroundSize, setBackgroundSize] = useState<number | null>(null);

  useEffect(() => {
    if (!canvasRef || !contextRef) return;

    if (!background) {
      /* Add a white background to the canvas. */
      contextRef.globalCompositeOperation = 'destination-over';
      contextRef.fillStyle = 'white';
      contextRef.fillRect(0, 0, canvasRef.width, canvasRef.height);
      contextRef.fillStyle = 'black';
      contextRef.globalCompositeOperation = 'source-over';

      return;
    }

    const img = document.createElement('img');
    img.src = URL.createObjectURL(background);

    img.onload = () => {
      /* Drawing images are squares, so
      their width and height are equal. */
      setBackgroundSize(img.width);

      contextRef.drawImage(img, 0, 0);
      URL.revokeObjectURL(img.src);
    };
  }, [canvasRef, contextRef, background]);

  return { backgroundSize };
};

export default useBackground;
