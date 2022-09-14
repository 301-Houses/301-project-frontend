import React from "react";

class Step1 extends React.Component {
  render() {
    return (
      <>
        <fieldset className="section is-active">
          <h3>What do you offer</h3>
          <div className="row cf">
            <div className="four col">
              <input type="radio" name="r1" id="r1" checked />
              <label for="r1">
                <h4>Sell Your House</h4>
              </label>
            </div>

            <div className="four col">
              <input type="radio" name="r1" id="r3" />
              <label for="r3">
                <h4>Rent your House</h4>
              </label>
            </div>
          </div>
          <div className="button">Next</div>
        </fieldset>
      </>
    );
  }
}

export default Step1;
