import React from 'react';
import './Main.scss';
import Button from './Button';
import AddTodoArea from './AddTodoArea';
import TodoArea from './TodoArea';
import RightControls from './RightControls';

const Main = () => {
  return (
    <div className="Main">
      <div className="item-1">
        <AddTodoArea />
      </div>
      <div className="item-2">

      <div className="wrapper">
          <TodoArea />
      </div>

      </div>
      <div className="item-3">
        <RightControls />
      </div>
      <div className="item-4">Footer</div>
    </div>
  );
};

export default Main;