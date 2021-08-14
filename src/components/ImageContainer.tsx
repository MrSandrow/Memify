import React, { FC, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background: #303030;
  border-radius: 0.5rem;
  display: flex;
  height: 80%;
  justify-content: center;
  position: relative;
  width: 90%;
`;

const Input = styled.input`
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
`;

const Placeholder = styled.p`
  color: #bbbbbb;
  font-weight: bold;
`;

const ImageContainer: FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const g = (event: React.ChangeEvent<HTMLInputElement>) => { setImage(event.target.files[0]); };

  return (
    <Container>
      <Input type="file" onChange={g} />
      <Placeholder>Upload an image</Placeholder>
    </Container>
  );
};

export default ImageContainer;
