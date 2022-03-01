import styled from 'styled-components';

interface StyledCanvasProps {
  cssHeight: number | null;
  cssWidth: number | null;
}

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  height: 100%;
  user-select: none;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  padding: 1.25em;
  width: 100%;
`;

export const LargeMessage = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

export const Message = styled.span`
  margin: auto;
  text-align: center;
`;

export const CanvasWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Canvas = styled.canvas<StyledCanvasProps>`
  background: white;
  border-radius: 0.5em;
  cursor: crosshair;
  height: 100%;
  max-height: ${(props) => props.cssHeight}px;
  max-width: ${(props) => props.cssWidth}px;
  touch-action: none;
  width: 100%;
`;
