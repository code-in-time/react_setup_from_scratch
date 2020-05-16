import React, { FunctionComponent, useState, MutableRefObject, forwardRef } from 'react';
import './Button.scss'

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  txt: string,
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
  disable?: boolean
}

const Button: FunctionComponent<IProps> = forwardRef(({txt, onClick, className = '', disable = false}, ref) => {
  const classN = className;
  return (
    <button ref={ref} disabled={disable} className={`Button ${classN}`} type="button" onClick={onClick}>
        {txt}
    </button>
  );
});

export default Button;