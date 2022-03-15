import axios from "axios";
import { useState } from "react";

function AutomobileForm(props) {
  // Will preload any data if we are updating an instance of an object. If not, we set values to default
  const { automobileInformation } = props;
  const [formDetails, setFormDetails] = useState({
    make: automobileInformation ? automobileInformation.make : "",
    engine: automobileInformation ? automobileInformation.engine : "",
    model: automobileInformation ? automobileInformation.model : "",
    year: automobileInformation ? automobileInformation.year : 1900,
    price: automobileInformation ? automobileInformation.price : 500,
  });

  // Will determine if we are updating or creating, in order to hit the correct endpoints on submission.
  const isUpdating = automobileInformation ? true : false;

  const onValChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmission = (e) => {
    if (isUpdating) {
      axios.put(
        `/inventory/automobiles/${automobileInformation._id}/put`,
        formDetails
      );
    } else {
      axios.post("/inventory/automobiles/", formDetails);
    }
  };

  return (
    <div className="formBackdrop">
      <form className="AutomobileForm" onSubmit={(e) => handleSubmission(e)}>
        <p className="close-form" onClick={() => props.closeAutomobileForm()}>
          X
        </p>

        <label htmlFor="make">Make:</label>
        <select
          name="make"
          id="make"
          onChange={(e) => onValChange(e)}
          value={formDetails.make}
        >
          <option value="">Select One</option>
          {props.makes.map((make, i) => {
            return (
              <option key={i} value={make._id}>
                {make.name}
              </option>
            );
          })}
        </select>

        <label htmlFor="engine">Engine:</label>
        <select
          name="engine"
          id="engine"
          onChange={(e) => onValChange(e)}
          value={formDetails.engine}
        >
          <option value="">Select One</option>
          <option value="v4">v4</option>
          <option value="v6">v6</option>
          <option value="v8">v8</option>
          <option value="v12">v12</option>
          <option value="electric">electric</option>
        </select>

        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          onChange={(e) => onValChange(e)}
          value={formDetails.model}
        />

        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          min={1900}
          max={2023}
          onChange={(e) => onValChange(e)}
          value={formDetails.year}
        />

        <label htmlFor="price">USD Price:</label>
        <input
          id="price"
          type="number"
          min={500}
          onChange={(e) => onValChange(e)}
          value={formDetails.price}
        />

        <br />
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AutomobileForm;
