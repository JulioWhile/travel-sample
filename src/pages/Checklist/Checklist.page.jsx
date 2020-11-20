import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Place from '../../components/Place';
import { AddPlace, FillSpaceButton } from './Checklist.page.styled';
import mockedPlaces from '../../mockedData';

function Checklist() {
  const [place, setPlace] = useState('');
  const [places, setPlaces] = useState(mockedPlaces);

  const addPlace = () => {
    if (place.length === 0) {
      setPlaces([...places, 'Best country ever :D !!']);
      return;
    }
    setPlaces([...places, place]);
    setPlace('');
  };

  const removePlaces = () => setPlaces([]);

  return (
    <>
      <h1>Travel Checklist</h1>
      {places.map((place) => (
        <Place name={place} key={place} />
      ))}
      <AddPlace>
        <input
          type="text"
          placeholder="Place..."
          value={place}
          onChange={(evt) => setPlace(evt.target.value)}
        />
        <button type="button" onClick={addPlace}>
          Add Place
        </button>
      </AddPlace>
      <FillSpaceButton type="button" onClick={removePlaces}>
        Clear Places
      </FillSpaceButton>
      <Link to="/">Go to Home</Link>
    </>
  );
}

export default Checklist;
