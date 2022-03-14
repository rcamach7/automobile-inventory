function Automobile(props) {
  return (
    <div className="Automobile">
      <p>Make: {props.automobile.make.name}</p>
      <p>Engine: {props.automobile.engine}</p>
      <p>Model: {props.automobile.model}</p>
      <p>Year: {props.automobile.year}</p>
      <p>Price: {props.automobile.price}</p>
    </div>
  );
}

export default Automobile;
