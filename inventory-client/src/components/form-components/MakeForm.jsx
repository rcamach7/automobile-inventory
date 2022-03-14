import { useState } from "react";
import axios from "axios";

function MakeForm(props) {
  // Will fill in form with make name IF a make item was passed in.
  const [makeName, setMakeName] = useState(
    props.makeInformation ? props.makeInformation.name : ""
  );
  // If we were given a make object, that means we will perform an update and be using the PUT method.
  const [formMethod] = useState(props.makeInformation ? "PUT" : "POST");
  // Determines the endpoint to hit if we are performing an update vs creation determined by checking if we were passed in a make object.
  const [formAction] = useState(
    props.makeInformation
      ? `/inventory/makes/${props.makeInformation._id}/put`
      : "/inventory/makes/"
  );

  const handleSubmission = () => {
    if (formMethod === "PUT") {
      axios.put(formAction, { name: makeName }).then(() => {
        props.setShowMakeForm(false);
      });
    } else {
      axios.post(formAction, { name: makeName }).then(() => {
        props.setShowMakeForm(false);
      });
    }
  };

  return (
    <div className="formBackdrop">
      <form className="MakeForm" onSubmit={() => handleSubmission()}>
        <p className="close-form" onClick={() => props.closeMakeForm()}>
          X
        </p>
        <label htmlFor="name">Make Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={makeName}
          onChange={(e) => setMakeName(e.target.value)}
          required
        />

        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default MakeForm;
