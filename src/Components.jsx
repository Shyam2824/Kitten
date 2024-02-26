import React from 'react';
import { useDispatch } from 'react-redux';
import { drawCard, startGame } from './actions';

const MyComponent = () => {
  const dispatch = useDispatch();

  const handleDrawCard = () => {
    dispatch(drawCard());
  };

  const handleStartGame = () => {
    dispatch(startGame());
  };

  return (
    <div>
      <button onClick={handleDrawCard}>Draw Card</button>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default MyComponent;
