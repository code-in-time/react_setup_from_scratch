import React, { FunctionComponent, useState } from 'react';
import './Button.css'

interface IProps {
  txt: string,
  onClick: () => void
  className?: string
  disable?: boolean
}

const Button: FunctionComponent<IProps> = ({txt, onClick, className = '', disable = false}) => {
  const classN = className;
  return (
    <button disabled={disable} className={`Button ${classN}`} type="button" onClick={onClick}>
        {txt}
    </button>
  );
};

export default Button;