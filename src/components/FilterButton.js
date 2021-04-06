function FilterButton({ name, onClick }) {
  return (
    <button type="button" className="btn toggle-btn" onClick={onClick}>
      <span>{name}</span>
    </button>
  );
}
export default FilterButton;

//onclick doesn't work..
