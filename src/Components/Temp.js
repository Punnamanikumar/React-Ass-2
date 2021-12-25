import { useState } from "react";
import "./Components/Background.css";

function Form() {
  // const [value, setTitle] = useState("");

  return (
    <div className="App form">
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <label htmlFor="">Name : </label>
      <input type="text" id="name" />
      {/* <input onChange={(event) => setTitle(event.target.value)} /> */}
      <br />
      <label htmlFor="">Department : </label>
      <input type="text" id="deartment" /> <br />
      <label htmlFor="">Rating : </label>
      <input type="text" id="rating" />
      <br />
      <button
        id="submit"
        onClick={() => {
          this.submited();
        }}
      >
        Submit
      </button>
      {/* ////<RenderData className="RenderData" /> */}
    </div>
  );
}

export default Form;
