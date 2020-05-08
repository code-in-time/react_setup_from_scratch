import React, { FunctionComponent, useState } from 'react';
import './Button.css'

interface IProps {
  txt: string,
  onClick: () => void
}

const Button: FunctionComponent<IProps> = ({txt, onClick}) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
        {txt}
    </button>
  );
};

export default Button;