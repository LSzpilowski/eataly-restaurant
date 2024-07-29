import React from 'react';

function DisplayGrid({ meals }) {
  return (
    <div className='bg-orange-500 w-4/5'>
      {meals.map((meal, index) => (
        <div key={index}>
          <h3>{meal.name}</h3>
          <p>{meal.price}</p>
          <p>{meal.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayGrid;
