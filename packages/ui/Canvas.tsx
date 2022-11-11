
import { useRef, useEffect, SyntheticEvent, useState } from 'react';
import { ColorPicker } from './ColorPicker';
import { drawLine } from './helpers/drawLine';
import styled from '@emotion/styled';

const StyledCanvas = styled('canvas')({
  border: '2px solid black',
  cursor: 'crosshair'
})

export const Canvas = ({ ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonResetRef = useRef<HTMLButtonElement>(null);
  const width = 400;
  const height = 280;
  const id = 'canvas';
  let isDrawing = false;
  let x = 0;
  let y = 0;
  const strokeWidth = 4;
  let color = 'black';
  // const [color, setColor] = useState('black');
  const handleColorChange = (event: SyntheticEvent):void => {
    const target = event.target as HTMLInputElement;
    color = target.value;
  }

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas?.getContext('2d');

    const handleMouseDown = (event: MouseEvent) => {
      x = event.offsetX;
      y = event.offsetY;
      isDrawing = true;
    };
    const handleMouseMove = (event: MouseEvent) => {
      if (isDrawing && context) {
        console.log('color', color);
        drawLine(context, x, y, event.offsetX, event.offsetY, color, strokeWidth);
        x = event.offsetX;
        y = event.offsetY;
      }
    }
    const handleMouseUp = (event: MouseEvent) => {
      if (isDrawing && context) {
        drawLine(context, x, y, event.offsetX, event.offsetY, color, strokeWidth);
        x = 0;
        y = 0;
        isDrawing = false;
      }
    };

    canvas?.addEventListener('mousedown', handleMouseDown)
    canvas?.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    const buttonReset = buttonResetRef.current;
    // buttonReset?.addEventListener('onClick', () => {
    //   console.log('reset')
    //   // const context = canvas?.getContext('2d');
    //   // context?.reset();
    // })

    return () => {
      canvas?.removeEventListener('mousedown', handleMouseDown);
      canvas?.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [])

  return (
    <>
      <StyledCanvas ref={canvasRef} width={width} height={height} id={id} {...props}></StyledCanvas>
      <ColorPicker handleColorChange={handleColorChange} />
      <button onClick={() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const context = canvas?.getContext('2d');
        // @ts-ignore
        context?.reset()
       }}>Clear</button>
    </>
  )
}

