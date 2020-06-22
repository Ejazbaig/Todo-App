import React, { Component } from "react";
import { FiTrash2 } from "react-icons/fi";
import { FaStrikethrough } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import styles from "./../css-modules/App.module.css";

class TodoItemContainer extends Component {
  render() {
    const {
      todoItem,
      todoItemTitle,
      deleteTodoItem,
      todoItemStrikeThrough,
      showFullDetailsHandler,
      saveTodoOnEnter,
      id,
      toggledClass,
      handleEditIcon,
      expand,
      dragOnStart,
      dragOnOver,
      dragOnDrop,
    } = this.props;

    const checkBox = this.props.children;
    return (
      <div
        className={styles.todoItemContainer}
        id="todoItemContainer"
        draggable={true}
        onDragStart={dragOnStart}
        onDragOver={dragOnOver}
        onDrop={dragOnDrop}
      >
        {checkBox}
        <p
          className={toggledClass ? "strikeThrough" : "saveTaskTextbox"}
          id={id}
          onKeyPress={saveTodoOnEnter}
          onClick={showFullDetailsHandler}
        >
          {expand === true ? todoItem : todoItemTitle}
        </p>
        <FaEdit className="editIcon" onClick={handleEditIcon} />
        <FiTrash2
          className="trashIcon"
          id="trashIcon"
          onClick={deleteTodoItem}
        />
        <FaStrikethrough
          className="strike"
          id={id}
          onClick={todoItemStrikeThrough}
        />
      </div>
    );
  }
}

export default TodoItemContainer;
