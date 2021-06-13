import React, { useState } from 'react';
import InputBox from '../../components/Input';
import TasksToDo from '../../containers/TasksToDo';
import TasksCompleted from '../../containers/TasksCompleted';
import styles from './home.module.css';

const Home = () => {
  const [data, setData] = useState();
  const [list, setList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const onChange = (e) => {
    setData(e.target.value);
  };
  const addToList = () => {
    let tempList = [...list];
    tempList.push({
      id: Math.random().toString(36).substr(2, 5),
      item: data
    });
    setList(tempList);
    setData();
  };
  const tasksCompleted = (id) => {
    let tempList = list;
    let tempCompletedList = [...completedTasks];
    let completedList = tempList.filter((item) => {
      return id === item.id;
    });
    tempCompletedList.push(...completedList);
    setCompletedTasks(tempCompletedList);
  };
  const tasksLeft = (id) => {
    let tasksLeft = list.filter((item) => {
      return id !== item.id;
    });
    setList(tasksLeft);
  };
  const deleteItem = (id) => {
    tasksCompleted(id);
    tasksLeft(id);
  };
  const emptyList = () => {
    let tempCompletedList = [...completedTasks];
    list.forEach((todoItem) => {
      tempCompletedList.push(todoItem);
    });
    setCompletedTasks(tempCompletedList);
    setList([]);
  };
  const emptyCompletedList = () => {
    setCompletedTasks([]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    addToList();
  };
  return (
    <div className={styles.toDoListContainer}>
      <h1>To-do List</h1>
      <div>
        <form onSubmit={onSubmit}>
          <InputBox
            onChange={onChange}
            placeholder="Enter task to do"
            className={styles.inputBox}
          />
          <button
            type="reset"
            onClick={addToList}
            className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>

      <div>
        <TasksToDo list={list} deleteItem={deleteItem} emptyList={emptyList} />
      </div>
      <TasksCompleted
        completedList={completedTasks}
        emptyCompletedList={emptyCompletedList}
      />
    </div>
  );
};

export default Home;
