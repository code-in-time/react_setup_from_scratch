import React from 'react';
import Button from './Button';

const RightControls = () => {
  return (
    <div>
      <Button txt="Record" onClick={() => console.log('onClick Record')}/>
      <Button txt="Stop Recording" onClick={() => console.log('onClick Stop Recording')}/>
      <Button txt="Clear Recording" onClick={() => console.log('onClick Clear Recording')}/>
      <Button txt="Play Recording" onClick={() => console.log('onClick Play Recording')}/>
    </div>
  );
};

export default RightControls;