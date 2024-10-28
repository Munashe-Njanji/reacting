import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div>
      <p>Current Balance: ${balance.toFixed(2)}</p>
    </div>
  );
}

export default Balance;
