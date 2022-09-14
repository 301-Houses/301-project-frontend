import React from "react";
import img1 from "./1403962.jpg";
import H1 from "./H1.png";
import H2 from "./H2.png";
import H3 from "./H3.png";
import "./PremiumAds.css";

class PremiumAds extends React.Component {



  render() {
    return (
      <>
      <h1 style={{ fontSize: "50px", marginTop: "10px" }}>Premuim Houses</h1>
      <div className="a" style={{ padding: "100px" }}>
        
        <div className="PremuimCard">
          <div className="PremuimCardContainer">
            <div>
              <img className="myimg" src={img1} alt="Logo" />
            </div>

            <div className="des">
              <p><b>Owner Name: </b>Samer</p>
              <p className="price"><b>preic: </b>3100$</p>
              <p><b>Roomes Number: </b>7</p>

            </div>
          </div>
        </div>

        <div className="PremuimCard">
          <div>
            <div>
              <img className="myimg" src={H1} alt="Logo" />
            </div>

            <div className="des">
            <p><b>Owner Name: </b>Sam</p>
              <p className="price"><b>preic: </b>4900$</p>
              <p><b>Roomes Number: </b>7</p>
            </div>
          </div>
        </div>

        <div className="PremuimCard">
          <div>
            <div>
              <img className="myimg" src={H2} alt="Logo" />
            </div>

            <div className="des">
            <p><b>Owner Name: </b>Rami</p>
              <p className="price"><b>preic: </b>2600$</p>
              <p><b>Roomes Number: </b>5</p>
            </div>
          </div>
        </div>

        <div className="PremuimCard">
          <div>
            <div>
              <img className="myimg" src={H3} alt="Logo" />
            </div>

            <div className="des">
            <p><b>Owner Name: </b>Mahmoud</p>
              <p className="price"><b>preic: </b>3800$</p>
              <p><b>Roomes Number: </b>8</p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default PremiumAds;
