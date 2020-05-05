import React, { FunctionComponent, useState } from 'react';
import './Button.css'

interface IProps {
  txt: string
}

const Button: FunctionComponent<IProps> = ({txt}) => {
  return (
    <button className="Button" type="button">
        {txt}
    </button>
  );
};

export default Button;