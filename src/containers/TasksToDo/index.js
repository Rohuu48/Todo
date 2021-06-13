import React from 'react';
import Icon from '../../components/Icon';
import styles from './../tasks.module.css';

const TasksToDo = ({ list, deleteItem, emptyList }) => {
  return (
    <div className={styles.tasksToDoContainer}>
      <h3>Tasks to do</h3>
      {list.length > 0 ? (
        <div className={styles.itemsList}>
          <ul>
            {list.map((todoItem) => {
              return (
                <li className={styles.todoItems} key={todoItem.id}>
                  <span>{todoItem.item}</span>
                  <Icon
                    className="far fa-trash-alt fa-x"
                    onClick={() => deleteItem(todoItem.id)}
                  />
                </li>
              );
            })}
          </ul>
          <button className={styles.emptyButton} onClick={emptyList}>
            Empty Entire List
          </button>
        </div>
      ) : (
        <p>No Tasks Left</p>
      )}
    </div>
  );
};

export default TasksToDo;
