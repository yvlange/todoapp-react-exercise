import "./App.css";
import "./styles/Header.css";
import "./styles/ToDoList.css";
import "./styles/ToDoItem.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

function App() {
  const [toDoItems, setToDoItems] = useState([]);

  function handleToDoAdd(taskName) {
    const newToDo = [...toDoItems, { name: taskName, isDone: true }];
    console.log(newToDo);
    setToDoItems(newToDo);
  }

  function handleToDoToggle(name) {
    const newToDo = toDoItems.map((task) => {
      if (task.name === name) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      } else {
        console.log(task);
        return task;
      }
    });
    setToDoItems(newToDo);
  }

  function handleToDoRemove(name) {
    const newToDo = toDoItems.filter((toDo) => {
      return toDo.name !== name;
    });
    setToDoItems(newToDo);
  }

  return (
    <div className="App">
      <Header onAddToDo={handleToDoAdd} />
      <ToDoList
        toDoItems={toDoItems}
        handleToDoRemove={handleToDoRemove}
        handleToDoToggle={handleToDoToggle}
      />
    </div>
  );
}
export default App;
