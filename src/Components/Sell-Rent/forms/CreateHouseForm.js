import React from "react";
import "./CreateHouseForm.css";

import Step1 from "./step1";
class CreateHouse extends React.Component {
  render() {
    return (
      <div className="formContainer">
        <div className="container">
          <form className="form-wrapper">
            <fieldset className="section">
              <h3>Choose a Password</h3>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Re-enter Password"
              />
              <input className="submit button" type="submit" value="Sign Up" />
            </fieldset>
            <fieldset className="section is-active">
              <h3>Account Created!</h3>
              <p>Your account has now been created.</p>
              <div className="button">Reset Form</div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateHouse;

/*

        <div className="wrapper">
          <ul className="steps">
            <li className="is-active">Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
          </ul>
          <form className="form-wrapper">
            <fieldset className="section is-active">
              <h3>Your Details</h3>
              <input type="text" name="name" id="name" placeholder="Name">
              <input type="text" name="email" id="email" placeholder="Email">
              <div className="button">Next</div>
            </fieldset>
            <fieldset className="section">
              <h3>Account Type</h3>
              <div className="row cf">
                <div className="four col">
                  <input type="radio" name="r1" id="r1" checked>
                  <label for="r1">
                    <h4>Designer</h4>
                  </label>
                </div>
                <div className="four col">
                  <input type="radio" name="r1" id="r2"><label for="r2">
                    <h4>Developer</h4>
                  </label>
                </div>
                <div className="four col">
                  <input type="radio" name="r1" id="r3"><label for="r3">
                    <h4>Project Manager</h4>
                  </label>
                </div>
              </div>
              <div className="button">Next</div>
            </fieldset>
            <fieldset className="section">
              <h3>Choose a Password</h3>
              <input type="password" name="password" id="password" placeholder="Password">
              <input type="password" name="password2" id="password2" placeholder="Re-enter Password">
              <input className="submit button" type="submit" value="Sign Up">
            </fieldset>
            <fieldset className="section">
              <h3>Account Created!</h3>
              <p>Your account has now been created.</p>
              <div className="button">Reset Form</div>
            </fieldset>
          </form>
        </div>


*/
