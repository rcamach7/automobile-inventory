function Navbar(props) {
  return (
    <aside className="Navbar">
      <button onClick={() => props.setShowMakeForm(true)}>
        Create New Make
      </button>
      <button>Create New Automobile</button>
    </aside>
  );
}

export default Navbar;
