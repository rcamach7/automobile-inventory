import Automobile from "./Automobile";

function Inventory(props) {
  return (
    <aside className="Inventory">
      {props.inventory.map((automobile) => {
        return <Automobile automobile={automobile} />;
      })}
    </aside>
  );
}

export default Inventory;
