import React, { Component } from "react";
import Button from "../button/Button";

class ActionBar extends Component {
  render() {
    const {
      todoItem,
      handleInputChange,
      addTodoItem,
      addTodoOnEnter,
      markSelected,
      deleteSelected,
      edited,
      inputFocus,
      checkBox,
    } = this.props;

    return (
      <div className="actionBarWrapper">
        <h1 className="mainHeading" id="heading">
          TODO LIST
        </h1>
        <div className="todoInputBar">
          <input
            type="text"
            className="addTaskTextbox"
            autoFocus
            ref={inputFocus}
            placeholder="Enter the task to add"
            value={todoItem}
            onChange={handleInputChange}
            onKeyPress={addTodoOnEnter}
          />
          <Button
            className="todoAddButton"
            onclickHandler={addTodoItem}
            label={edited ? "Save" : "Add"}
          />
        </div>
        <div className="todoActionBar" id="todoActionBar">
          <div className="checkBoxWrapper">{checkBox}</div>
          <Button onclickHandler={deleteSelected} label="Delete Selected" />
          <Button onclickHandler={markSelected} label="Mark/UnMark Selected" />
        </div>
        <hr className="myHrStyle" />
      </div>
    );
  }
}

export default ActionBar;
