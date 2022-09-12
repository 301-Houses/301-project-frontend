import React from "react";
import img00 from "./1403962.jpg";
import "./HouseForm.css";
import HouseModal from "../HouseModale/HousModal";
class HouseCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleShow = () => {
    console.log("Card Clicked");
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <>
        <div className="services">
          <div id="serv_hover" className="services_box">
            <img className="img00" src={img00} alt="#" />
            <h1>For sell</h1>
            <p id="status">available </p>
            <p>2 dbs | 3ath | 150-162</p>
          </div>

          <div id="serv_hover" className="services_box">
            <img
              className="img00"
              src={img00}
              alt="#"
              onClick={this.handleShow}
            />
            <h1>For sell</h1>
            <p id="status">available </p>
            <p></p>
          </div>
          <div id="serv_hover" className="services_box">
            <img className="img00" src={img00} alt="#" />
            <h1>For sell</h1>
            <p id="status">available </p>

            <p>2 dbs | 3ath | 150-162</p>
            <button>button</button>
            <button>button</button>
          </div>
        </div>

        <HouseModal show={this.state.show} closeModal={this.handleClose} />
      </>
    );
  }
}
export default HouseCard;