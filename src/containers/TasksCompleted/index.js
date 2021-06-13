import React from 'react';
import styles from './../tasks.module.css';

const TasksCompleted = ({ completedList, emptyCompletedList }) => {
  return (
    <div className={styles.tasksToDoContainer}>
      <h3>Completed Tasks</h3>
      {completedList.length > 0 ? (
        <div className={styles.itemsList}>
          <ul>
            {completedList.map((todoItem) => {
              return (
                <li className={styles.todoItems} key={todoItem.id}>
                  <span>{todoItem.item}</span>
                </li>
              );
            })}
          </ul>
          <button className={styles.emptyButton} onClick={emptyCompletedList}>
            Empty Entire List
          </button>
        </div>
      ) : (
        <p>No Tasks Completed</p>
      )}
    </div>
  );
};

export default TasksCompleted;
