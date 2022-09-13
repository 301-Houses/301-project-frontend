import React from "react";
import CreateHouseForm from "./forms/CreateHouseForm";
import "./Sell-Rent.css";
import $ from "jquery";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
class SellRent extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:""
    }
  }
  handelSubmite=(e)=>{
    e.preventDefault()
    const { user } = this.props.auth0;
    let  email=user.email
  let ownerName=e.target.ownerName.value
  let imgURL=e.target.imgURL.value
  let  houseAddress=e.target.houseAddress.value
  let houseSize=e.target.HouseSize.value
    let numOfRoomse=e.target.numOfRoomse.value
    let price=e.target.price.value
    let  phoneNumber=e.target.phoneNumber.value
    let ispremium=e.target.isPremuim.checked
   let obj={
      imgURL: imgURL,         
        ownerName:ownerName,
        houseAddress :houseAddress,
        houseSize :houseSize,
        numOfRoomse:numOfRoomse,
        isSold:false,
        price:price,
        email:email,
        phoneNumber:phoneNumber,
        ispremium:ispremium,
      status:this.state.name,
      lat:30,
      long:35
    }
    axios.post("http://localhost:3001/house",obj)
    console.log(obj)
  }
handleChange=(e)=>{

console.log("hi")
    this.setState({
        name:e.target.value
    })
    console.log(e.target.value)
}


  
  render() {
    return (
      <div className="formBody">
        <div class="container">
          <div class="wrapper">
            <ul class="steps">
              <li class="is-active">Step 1</li>
              <li>Step 2</li>
              <li>Step 3</li>
            </ul>
            <form onSubmit={this.handelSubmite} class="form-wrapper">
              <fieldset class="section is-active">
                <h3>Hosue Details</h3>
                <input
                  type="text"
                  name="imgURL"
                  id="imgURL"
                  placeholder="imageURL"
                />
                <input
                  type="text"
                  name="HouseSize"
                  id="name"
                  placeholder="House Size"
                />
                <input
                  type="text"
                  name="numOfRoomse"
                  id="email"
                  placeholder="Number of rooms"
                />

                <input
                  type="text"
                  name="houseAddress"
                  id="email"
                  placeholder="House Address"
                />

                <input
                  type="text"
                  name="price"
                  id="email"
                  placeholder="Price"
                />
                <div class="button">Next</div>
              </fieldset>
              <fieldset class="section">
                <h3>House Type</h3>
                <div class="row cf">
                  <div class="four col">
                    <input type="radio" name="r1" id="r1"  value="Sell"  onClick={this.handleChange}/>
                    <label for="r1">
                      <h4>Sell</h4>
                    </label>
                  </div>
                  <div class="four col">
                    <input type="radio" name="r1" id="r2" value="Rent" onClick={this.handleChange}/>
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
                  id="ownerName"
                  placeholder="Owner Name"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
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

export default withAuth0(SellRent);
