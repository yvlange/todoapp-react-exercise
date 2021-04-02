import ToDoItem from "./ToDoItem";

function ToDoList({ toDoItems, handleToDoRemove, handleToDoToggle }) {
  function renderToDos() {
    return toDoItems.map((taskName) => {
      return (
        <ToDoItem
          name={taskName.name}
          key={taskName.name}
          isDone={taskName.isDone}
          onClickToDoRemove={handleToDoRemove}
          onClickToDoToggle={handleToDoToggle}
        />
      );
    });
  }
  return <main className="ToDoList">{renderToDos()}</main>;
}
export default ToDoList;
