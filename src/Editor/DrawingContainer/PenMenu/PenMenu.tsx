import React, {
  FC, useLayoutEffect, useRef, useState,
} from 'react';
import styled from 'styled-components';

import ColorSelector from './ColorSelector/ColorSelector';
import ThicknessSelector from './ThicknessSelector/ThicknessSelector';

const Container = styled.div`
  background: #292929;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  position: absolute;
  width: 100%;
`;

interface Props {
  penColor: string;
  setPenColor: React.Dispatch<React.SetStateAction<string>>;
  penThickness: number;
  setPenThickness: React.Dispatch<React.SetStateAction<number>>;
}

const PenMenu:FC<Props> = (props) => {
  const { penColor, setPenColor } = props;
  const { penThickness, setPenThickness } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useLayoutEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const container = entries[0].target as HTMLDivElement;
      setContainerHeight(container.offsetHeight);
    });

    if (!containerRef.current) return undefined;
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Container ref={containerRef}>
      {containerHeight > 380 && <ColorSelector penColor={penColor} setPenColor={setPenColor} />}
      <ThicknessSelector penThickness={penThickness} setPenThickness={setPenThickness} />
    </Container>
  );
};

export default PenMenu;
