function Header({ onAddToDo }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    const form = event.target;
    onAddToDo(form.taskName.value);

    form.reset();
  }

  return (
    <header className="Header">
      <h1>My To Dos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="To Dos.."
          name="taskName"
          id="taskName"
          className="Header--form"
          required
        />
        <button className="AddButton" type="submit">
          Add
        </button>
      </form>
    </header>
  );
}

export default Header;
