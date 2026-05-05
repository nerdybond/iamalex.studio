
import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (

  <div className={ isDanger ? 'countdown danger' : 'countdown' }>
  <p className='flex border-2 border-white text-center font-bold p-6 h-30 w-30'>{value}</p>
  <span className='flex mt-10 flex-col'>{type}</span>
  </div>

  );
};

export default DateTimeDisplay;