import "./App.css";
import "./styles/Header.css";
import "./styles/ToDoList.css";
import "./styles/ToDoItem.css";
import "./styles/Footer.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import FilterButton from "./components/FilterButton";
import { useState } from "react";

const FILTER_MAP = {
  All: () => true,
  Pending: (task) => !task.isDone,
  Finished: (task) => task.isDone,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const [filter, setFilter] = useState("All");

  function handleToDoAdd(taskName) {
    const newToDo = [
      ...toDoItems,
      { id: taskName.id, name: taskName, isDone: true },
    ];

    setToDoItems(newToDo);
  }

  const filterList = FILTER_NAMES.map((task) => (
    <FilterButton
      key={task}
      name={task}
      isPressed={task.isPressed === filter}
      setFilter={setFilter}
    />
  ));

  function handleToDoToggle(name) {
    const newToDo = toDoItems.map((task) => {
      if (task.name === name) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      } else {
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

  function handleToDoEdit(id, newName) {
    const editedToDoList = toDoItems.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setToDoItems(editedToDoList);
  }

  return (
    <div className="App">
      <Header onAddToDo={handleToDoAdd} />
      <ToDoList
        toDoItems={toDoItems}
        handleToDoRemove={handleToDoRemove}
        handleToDoToggle={handleToDoToggle}
        handleToDoEdit={handleToDoEdit}
      />
      <div className="FilterButtons">
        {filterList}
        {/* <FilterButton name="All" />
        <FilterButton name="Pending" />
        <FilterButton name="Finished" /> */}
      </div>
    </div>
  );
}
export default App;
