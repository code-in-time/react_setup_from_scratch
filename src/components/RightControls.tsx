import React from 'react';
import Button from './Button';
import EventTracker from '../EventTracker';

const RightControls = () => {
  return (
    <div>
      <Button txt="Record" onClick={() => console.log('onClick Record')}/>
      <Button txt="Stop Recording" onClick={() => console.log('onClick Stop Recording')}/>
      <Button txt="Clear Recording" onClick={() => console.log('onClick Clear Recording')}/>
      <Button txt="Play Recording" onClick={
        () => {
          console.log('onClick Play Recording')
          console.log(EventTracker.track)
          // debugger
          // EventTracker.track[2].ref.current.focus()
          EventTracker.track[4].ref.current.click()
        }}/>
    </div>
  );
};

export default RightControls;