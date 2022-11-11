
import React, { useRef, useEffect, SyntheticEvent, useState } from 'react';
import { drawLine } from './helpers/drawLine';

export const Canvas = ({ ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width = 400;
  const height = 280;
  const id = 'canvas';
  let isDrawing = false;
  let x = 0;
  let y = 0;
  const strokeWidth = 4;
  const color = 'black';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');

      const handleMouseDown = (event: MouseEvent) => {
        x = event.offsetX;
        y = event.offsetY;
        isDrawing = true;
      };
      const handleMouseMove = (event: MouseEvent) => {
        if (isDrawing && context) {
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

      canvas.addEventListener('mousedown', handleMouseDown)
      canvas.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)

      return () => {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} width={width} height={height} id={id} {...props}></canvas>
  )
}

