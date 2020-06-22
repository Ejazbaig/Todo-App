import React, { Component } from "react";

class CheckBox extends Component {
  render() {
    const { id, checked, handleCheckBox, label } = this.props;
    return (
      <>
        <div className="pretty p-icon p-round p-jelly">
          <input
            type="checkbox"
            className="todoCheckBox"
            id={id}
            checked={checked}
            onChange={handleCheckBox}
          />
          <div className="state p-primary">
            <i className="icon mdi mdi-check"></i>
            <label>{label}</label>
          </div>
        </div>
      </>
    );
  }
}

export default CheckBox;
