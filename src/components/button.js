import React from "react";

function Button({ handleClick, type, classType, style, text }) {
  return (
      <button
        onClick={handleClick}
        type={type}
        className={classType}
        style={style}
      >
        <p>{text}</p>
      </button>
  );
}

export default Button;