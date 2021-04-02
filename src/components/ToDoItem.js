function ToDoItem({ name, isDone, onClickToDoRemove, onClickToDoToggle }) {
  function handleDeleteButtonClick() {
    onClickToDoRemove(name);
  }

  function handleToggleButtonClick() {
    onClickToDoToggle(name);
  }

  const toDosForDone = isDone ? "ToDoItem--pending" : "ToDoItem--done";

  return (
    <section className={`ToDoItem ${toDosForDone}`}>
      <button className="ToDoItem--delete" onClick={handleDeleteButtonClick}>
        x
      </button>
      <div className="Task">
        {isDone ? `${name} is pending` : `${name} is done`}
      </div>
      <button className="ToDoItem--button" onClick={handleToggleButtonClick}>
        {isDone ? "Pending" : "Done"}
      </button>
    </section>
  );
}
export default ToDoItem;
