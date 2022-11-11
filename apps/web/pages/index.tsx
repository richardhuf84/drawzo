import { Button, Canvas } from "ui";
import { css } from '@emotion/react';

export default function Web() {
  return (
    <div css={css`
        font-family: sans-serif;
      `}>
      <h1>
        Drawzo
      </h1>
      <Canvas />
    </div>
  );
}
