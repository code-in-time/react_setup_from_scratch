import React, { FunctionComponent, useState } from 'react';
import './Button.css'

interface IProps {
  txt: string,
  onClick: () => void
  className?: string
}

const Button: FunctionComponent<IProps> = ({txt, onClick, className = ''}) => {
  const classN = className;
  return (
    <button className={`Button ${classN}`} type="button" onClick={onClick}>
        {txt}
    </button>
  );
};

export default Button;