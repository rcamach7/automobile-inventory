import axios from "axios";

function MakeItem(props) {
  const deleteHandler = (e) => {
    axios
      .delete(`/inventory/makes/${props.make._id}/delete/`)
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <li className="MakeItem">
      <p>{props.make.name}</p>
      <div className="formContainer">
        <form onSubmit={(e) => deleteHandler(e)}>
          <input className="delete-btn" type="submit" value="Delete" />
        </form>

        <button
          className="update-btn"
          onClick={() => props.loadMakeForm(props.make._id)}
        >
          Update
        </button>
      </div>
    </li>
  );
}

export default MakeItem;
