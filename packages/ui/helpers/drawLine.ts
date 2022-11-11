export const drawLine = (context: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color: string = 'black', strokeWidth: number = 1): void => {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = strokeWidth;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}