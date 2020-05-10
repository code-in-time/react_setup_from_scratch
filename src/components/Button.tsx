import React, { FunctionComponent, useState, MutableRefObject } from 'react';
import './Button.css'

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  txt: string,
  onClick: (e: React.MouseEvent<HTMLElement>) => void
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