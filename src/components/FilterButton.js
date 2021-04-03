function FilterButton({ name, isPressed, setFilter }) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span>{name}</span>
    </button>
  );
}
export default FilterButton;

//onclick doesn't work..
