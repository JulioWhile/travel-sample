import React, { useState } from 'react';
import { PlaceElement } from './Place.component.styled';

function Place({ name = '' }) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => setChecked(!checked);

  return (
    <PlaceElement>
      <input type="checkbox" checked={checked} onChange={handleClick} />
      <label onClick={handleClick}>{name}</label>
    </PlaceElement>
  );
}

export default Place;
