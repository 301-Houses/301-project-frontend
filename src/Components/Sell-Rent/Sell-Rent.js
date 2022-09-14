import React from "react";
import CreateHouseForm from "./forms/CreateHouseForm";
import "./Sell-Rent.css";
import $ from "jquery";
import Map from "./../Map/Map";
class SellRent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postion: [],
    };
  }
  getPostion = (postion) => {
    this.setState({
      postion: postion,
    });
  };
  render() {
    console.log("Inside Sell Rent");
    console.log(this.state);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "100px",
        }}
      >
        <div className="formBody">
          <div class="container">
            <div class="wrapper">
              <ul class="steps">
                <li class="is-active">Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
              </ul>
              <form class="form-wrapper">
                <fieldset class="section is-active">
                  <h3>Hosue Details</h3>
                  <input
                    type="text"
                    name="HouseSize"
                    id="name"
                    placeholder="House Size"
                  />
                  <input
                    type="text"
                    name="rooms"
                    id="email"
                    placeholder="Number of rooms"
                  />

                  <input
                    type="text"
                    name="address"
                    id="email"
                    placeholder="House Address"
                  />

                  <input
                    type="text"
                    name="Price"
                    id="email"
                    placeholder="Price"
                  />
                  <div class="button">Next</div>
                </fieldset>
                <fieldset class="section">
                  <h3>House Type</h3>
                  <div class="row cf">
                    <div class="four col">
                      <input type="radio" name="r1" id="r1xxxx" checked />
                      <label for="r1">
                        <h4>Sell</h4>
                      </label>
                    </div>
                    <div class="four col">
                      <input type="radio" name="r1" id="rx2" />
                      <label for="r2">
                        <h4>Rent</h4>
                      </label>
                    </div>
                  </div>
                  <div class="button">Next</div>
                </fieldset>
                <fieldset class="section">
                  <h3>Owner Details</h3>
                  <input
                    type="text"
                    name="ownerName"
                    id="password"
                    placeholder="Owner Name"
                  />
                  <input
                    type="text"
                    name="ownerPhoneNumber"
                    id="passwords"
                    placeholder="Enter your phone number"
                  />
                  <input type="checkbox" name="isPremuim" />
                  <label style={{ marginLeft: "30px", marginTop: "10px" }}>
                    Premuim AD
                  </label>

                  <br></br>
                  <input class="button" type="submit" value="Create" />
                </fieldset>
                <fieldset class="section">
                  <h3>House Created!</h3>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <div style={{ display: "inline-flex", width: "900px" }}>
          <Map getPostion={this.getPostion} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    $(document).ready(function () {
      $(".form-wrapper .button").click(function () {
        var button = $(this);
        var currentSection = button.parents(".section");
        var currentSectionIndex = currentSection.index();
        var headerSection = $(".steps li").eq(currentSectionIndex);
        currentSection.removeClass("is-active").next().addClass("is-active");
        headerSection.removeClass("is-active").next().addClass("is-active");

        $(".form-wrapper").submit(function (e) {
          e.preventDefault();
        });

        if (currentSectionIndex === 3) {
          $(document)
            .find(".form-wrapper .section")
            .first()
            .addClass("is-active");
          $(document).find(".steps li").first().addClass("is-active");
        }
      });
    });
  }
}

export default SellRent;
