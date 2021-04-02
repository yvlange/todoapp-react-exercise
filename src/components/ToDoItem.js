import { TiDeleteOutline } from "react-icons/ti";

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
      <TiDeleteOutline
        title="Delete"
        size="1.5em"
        className="ToDoItem--delete"
        onClick={handleDeleteButtonClick}
      />

      <div className={`Task ${toDosForDone}`}>
        {isDone ? `${name} is pending` : `${name} is done`}
      </div>
      <button className="ToDoItem--button" onClick={handleToggleButtonClick}>
        {isDone ? "Pending" : "Done"}
      </button>
    </section>
  );
}
export default ToDoItem;
