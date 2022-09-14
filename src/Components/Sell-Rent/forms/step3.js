import React from "react";

class Step3 extends React.Component {
  render() {
    return (
      <>
        <fieldset className="section ">
          <h3>Your Details</h3>
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="text" name="email" id="email" placeholder="Email" />
          <div className="button">Next</div>
        </fieldset>
      </>
    );
  }
}

export default Step3;
