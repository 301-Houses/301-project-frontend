import React from "react";
import img00 from "./1403962.jpg";
import "./HouseCard.css";
import HouseModal from "../HouseModal/HouseModal";
import icon1 from "./navigator.png";
import icon2 from "./real-estate.png";

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
        <div className="houseCard">
          <div id="houseCard_hover" className="houseCard_box">
          <label className="premium">For sell</label>

            <img  onClick={this.handleShow} className="img00" src={img00} alt="#" />
            <div className="det">
            <div>
                  <span>
                    <img  src={icon2} alt="#" />
                  </span>
                  {/* <span></span> */}
                  <h1>90000 JD</h1>
                </div>
                <div>
                  <span>
                    <img  src={icon1} alt="#" />
                  </span>
                  <span id ="loc">Amman Amman</span>
                </div>
                       
            </div>
           
          </div>

          <div id="houseCard_hover" className="houseCard_box">
          <label className="premium">For sell</label>

            <img  onClick={this.handleShow} className="img00" src={img00} alt="#" />
            <div className="det">
            <div>
                  <span>
                    <img  src={icon2} alt="#" />
                  </span>
                  {/* <span></span> */}
                  <h1>90000 JD</h1>
                </div>
                <div>
                  <span>
                    <img  src={icon1} alt="#" />
                  </span>
                  <span id ="loc">Amman Amman</span>
                </div>
                       
            </div>
           
          </div>
          
          <div id="houseCard_hover" className="houseCard_box">
          <label className="premium">For sell</label>

            <img  onClick={this.handleShow} className="img00" src={img00} alt="#" />
            <div className="det">
            <div>
                  <span>
                    <img  src={icon2} alt="#" />
                  </span>
                  {/* <span></span> */}
                  <h1>90000 JD</h1>
                </div>
                <div>
                  <span>
                    <img  src={icon1} alt="#" />
                  </span>
                  <span id ="loc">Amman Amman</span>
                </div>
                       
            </div>
           
          </div>
          </div>

        <HouseModal show={this.state.show} closeModal={this.handleClose} />
      </>
    );
  }
}
export default HouseCard;