import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

function ToDoItem({
  name,
  isDone,
  id,
  onClickToDoRemove,
  onClickToDoToggle,
  handleToDoEdit,
}) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const editingTemplate = (
    <form className="edit-Template" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          New name for {name}
        </label>
        <input
          id={id}
          className="todo-text"
          type="text"
          placeholder="Edit your to do.."
          value={newName}
          onChange={handleEditButtonClick}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="checkbox-done">
        <input
          id={id}
          type="checkbox"
          defaultChecked={!isDone}
          onChange={() => handleToggleButtonClick()}
        />
        <label className="todo-label" htmlFor={id}>
          Mark to do as done
        </label>
        <div className="task-content">{name}</div>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit
        </button>
        {/* <TiDeleteOutline
          title="Delete"
          size="1.5em"
          className="ToDoItem--delete"
          onClick={handleDeleteButtonClick}
        /> */}
        <button
          type="button"
          className="btn todo-cancel"
          onClick={handleDeleteButtonClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  function handleEditButtonClick(event) {
    setNewName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleToDoEdit(id, newName);
    setNewName("");
    setEditing(false);
  }

  function handleDeleteButtonClick() {
    onClickToDoRemove(name);
  }

  function handleToggleButtonClick() {
    onClickToDoToggle(name);
  }

  const toDosForDone = isDone ? "ToDoItem--pending" : "ToDoItem--done";

  return (
    <section className={`ToDoItem ${toDosForDone}`}>
      <div className="todo">{isEditing ? editingTemplate : viewTemplate}</div>
    </section>
  );
}
export default ToDoItem;

/* //   <TiDeleteOutline 
//     title="Delete"
//     size="1.5em"
//     className="ToDoItem--delete"
//     onClick={handleDeleteButtonClick}
//   />
//   <div className="ToDoItem--content">
//     <div className={`Task ${toDosForDone}`}>
//       {isDone ? `${name} is pending` : `${name} is done`}
//     </div>
//   </div>
//   <button className="ToDoItem--button" onClick={handleToggleButtonClick}>
//     {isDone ? "Pending" : "Done"}
//   </button>
 */
