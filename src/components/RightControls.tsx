import React from 'react';
import Button from './Button';
import { useStore } from '../hooks/useStore'

const RightControls = () => {

  const { Tracker, TodoStore } = useStore()
  return (
    <div>
      <Button txt="Record" onClick={() => console.log('onClick Record')}/>
      <Button txt="Stop Recording" onClick={() => console.log('onClick Stop Recording')}/>
      <Button txt="Clear Recording" onClick={() => Tracker.reset()}/>
      <Button txt="Play Recording" onClick={
        () => {
          console.log('onClick Play Recording')
          // debugger
          // EventTracker.play[2].ref.current.focus()
          TodoStore.reset();
          Tracker.play()
        }}/>
    </div>
  );
};

export default RightControls;