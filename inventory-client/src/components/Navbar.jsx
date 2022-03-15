function Navbar(props) {
  return (
    <aside className="Navbar">
      <button onClick={() => props.setShowMakeForm(true)}>
        Create New Make
      </button>
      <button onClick={() => props.setShowAutomobileForm(true)}>
        Create New Automobile
      </button>
    </aside>
  );
}

export default Navbar;
