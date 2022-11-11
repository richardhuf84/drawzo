import React, { SyntheticEvent } from 'react';

export interface ColorPickerProps { 
  handleColorChange: (event: SyntheticEvent) => void;
} 
export const ColorPicker = ({ handleColorChange }: ColorPickerProps) => { 

  return (
    <fieldset>
      <label htmlFor="colorPicker">Select color</label>
      <input type="color" id="colorPicker" onChange={handleColorChange} />
    </fieldset>
  )
}