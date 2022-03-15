import Automobile from "./Automobile";
import MakeItem from "./MakeItem";

function Inventory(props) {
  return (
    <aside className="Inventory">
      <p>Makes Available</p>
      <ul className="makesContainer">
        {props.makes.map((make, i) => {
          return (
            <MakeItem
              make={make}
              key={i}
              setShowMakeForm={props.setShowMakeForm}
              loadMakeForm={props.loadMakeForm}
            />
          );
        })}
      </ul>

      <p>Automobiles Available</p>
      <div className="automobileContainer">
        {props.inventory.map((automobile, i) => {
          return (
            <Automobile
              key={i}
              automobile={automobile}
              loadAutomobileForm={props.loadAutomobileForm}
            />
          );
        })}
      </div>
    </aside>
  );
}

export default Inventory;
