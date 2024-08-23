import React from 'react';
import Style from './button.module.css';
import { Link } from 'react-router-dom';

function Button({ link_, onPopUp_, text_, disabled }) {
  if (!text_) {
    return null;
  }

  return (
    <Link to={link_}>
      <button onClick={onPopUp_} disabled={disabled} id={Style.greenBTN}>
        {text_}
      </button>
    </Link>
  );
}

export default Button;
