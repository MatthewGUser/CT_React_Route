import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams(); // Get the dynamic id from the URL
  const character = { id, name: 'Spider-Man', bio: 'A superhero with spider-like abilities.' }; // Example data

  return (
    <div>
      <h2>Character Details: {character.name}</h2>
      <p>ID: {character.id}</p>
      <p>Bio: {character.bio}</p>
    </div>
  );
};

export default CharacterDetails;
