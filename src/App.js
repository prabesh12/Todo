import "./App.scss";
import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState([]);

  //temp state

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // add task functiion
  const addTask = () => {
    if (newTask) {
      let count = todo.length + 1;
      let newEntry = { id: count, title: newTask, status: false };
      setTodo([...todo, newEntry]);
      setNewTask("");
    }
  };

  // function to Delete Task
  const deleteTask = (id) => {
    let newTasks = todo.filter((task) => task.id !== id);
    console.log(id);
    console.log(newTasks);
    setTodo(newTasks);
  };

  // function to mark task as completed

  const markCompletedTasK = (id) => {
    let newTasks = todo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }

      return task;
    });
    setTodo(newTasks);
  };

  // fucntion to cancel update

  const cancelUpdate = () => {
    setUpdateData("");
   
  };

   // function to change task

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  //function to updateTask

  const updateTask = () => {
    let filterRecord = [...todo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filterRecord, updateData];
    setTodo(updateObject);
    setUpdateData("");
  };

  return (
    <div className="App container">
      <br />
      <h2>Todo App</h2>
      <br />

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Displays Todos */}

      <Todo
        todo={todo}
        markCompletedTasK={markCompletedTasK}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
