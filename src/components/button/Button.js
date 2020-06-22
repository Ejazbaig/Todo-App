import React, { Fragment } from "react";

function Button(props) {
  const { className, onclickHandler, label } = props;
  return (
    <Fragment>
      <button
        type="button"
        className={className === undefined ? "todoButton" : className}
        onClick={onclickHandler}
      >
        {label}
      </button>
    </Fragment>
  );
}

export default Button;
