function Automobile(props) {
  return (
    <div className="Automobile">
      <p>Make: {props.automobile.make.name}</p>
      <p>Engine: {props.automobile.engine}</p>
      <p>Model: {props.automobile.model}</p>
      <p>Year: {props.automobile.year}</p>
      <p>Price: {props.automobile.price}</p>

      <div className="buttonContainer">
        <button
          className="update-btn"
          onClick={() => props.loadAutomobileForm(props.automobile._id)}
        >
          Update
        </button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default Automobile;
