import "./scss/App.scss";
import Navbar from "./components/Navbar";
import Inventory from "./components/Inventory";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [inventory, setInventory] = useState([]);
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    loadDatabase();
  }, []);

  useEffect(() => {
    console.log(inventory);
    console.log(makes);
  }, [inventory, makes]);

  const loadDatabase = () => {
    axios.get("/inventory/automobiles").then((result) => {
      setInventory(result.data);
    });
    axios.get("inventory/makes").then((result) => {
      setMakes(result.data);
    });
  };

  return (
    <div className="App">
      <header className="website-title">
        <h1>Automobile Inventory</h1>
      </header>

      <div className="mainContainer">
        <Navbar />
        <Inventory inventory={inventory} />
      </div>
    </div>
  );
}

export default App;
