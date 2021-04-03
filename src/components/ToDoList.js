import ToDoItem from "./ToDoItem";

function ToDoList({
  toDoItems,
  handleToDoRemove,
  handleToDoToggle,
  handleToDoEdit,
}) {
  function renderToDos() {
    return toDoItems.map((taskName) => (
      <ToDoItem
        id={taskName.id}
        name={taskName.name}
        key={taskName.name}
        isDone={taskName.isDone}
        onClickToDoRemove={handleToDoRemove}
        onClickToDoToggle={handleToDoToggle}
        handleToDoEdit={handleToDoEdit}
      />
    ));
  }

  return <main className="ToDoList">{renderToDos()}</main>;
}
export default ToDoList;

// .filter(FILTER_MAP[filter])
