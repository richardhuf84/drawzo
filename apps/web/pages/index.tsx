import { Canvas } from "ui";
import styled from '@emotion/styled';

const StyledApp = styled('div')({ 
  fontFamily: 'sans-serif'
 })

export default function Web() {
  return (
    <StyledApp>
      <h1>
        Drawzo
      </h1>
      <Canvas />
    </StyledApp>
  );
}
