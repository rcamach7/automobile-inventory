import "./scss/App.scss";
import Navbar from "./components/Navbar";
import Inventory from "./components/Inventory";
import MakeForm from "./components/form-components/MakeForm";
import AutomobileForm from "./components/form-components/automobileForm";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [inventory, setInventory] = useState([]);
  const [makes, setMakes] = useState([]);

  const [showMakeForm, setShowMakeForm] = useState(false);
  const [makeInformation, setMakeInformation] = useState(null);

  const [showAutomobileForm, setShowAutomobileForm] = useState(false);
  const [automobileInformation, setAutomobileInformation] = useState(null);

  useEffect(() => {
    loadDatabase();
  }, []);

  const loadDatabase = () => {
    axios.get("/inventory/automobiles").then((result) => {
      setInventory(result.data);
    });
    axios.get("/inventory/makes").then((result) => {
      setMakes(result.data);
    });
  };

  const closeMakeForm = () => {
    // Cleans up any previously stored objects
    setMakeInformation(null);
    setShowMakeForm(false);
  };

  const loadMakeForm = (make_id) => {
    // If make ID is provided, it means we are updating a make and will display it's information in the form
    if (make_id !== undefined) {
      // Get make information and provide it to form to pre populate data
      axios.get(`/inventory/makes/${make_id}`).then((result) => {
        setMakeInformation(result.data);
        setShowMakeForm(true);
      });
    } else {
      // No make ID was provided so we are creating a new make
      setShowMakeForm(true);
    }
  };

  return (
    <div className="App">
      <header className="website-title">
        <h1>Automobile Inventory</h1>
      </header>

      <div className="mainContainer">
        <Navbar setShowMakeForm={setShowMakeForm} />
        <Inventory
          inventory={inventory}
          makes={makes}
          setShowMakeForm={setShowMakeForm}
          loadMakeForm={loadMakeForm}
        />
      </div>

      {/* Form Components */}
      {showMakeForm ? (
        <MakeForm
          makeInformation={makeInformation}
          closeMakeForm={closeMakeForm}
        />
      ) : null}
      {showAutomobileForm ? <AutomobileForm /> : null}
    </div>
  );
}

export default App;
