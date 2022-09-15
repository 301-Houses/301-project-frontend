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
        <h1 style={{ fontSize: "50px", marginTop: "150px" }}>Premuim Houses</h1>
        <div className="a" style={{ padding: "100px" }}>
          <div className="PremuimCard">
            <div className="PremuimCardContainer">
              <div>
                <img className="myimg" src={img1} alt="Logo" />
              </div>

              <div className="des">
                <p>
                  <b>Owner : </b>Yousef
                </p>
                <p className="price">
                  <b>Price: </b>3100000$
                </p>
                <p>
                  <b>House Size : </b>1850 m
                </p>
              </div>
            </div>
          </div>

          <div className="PremuimCard">
            <div>
              <div>
                <img className="myimg" src={H1} alt="Logo" />
              </div>

              <div className="des">
                <p>
                  <b>Owner : </b>Sam
                </p>
                <p className="price">
                  <b>Price: </b>490000$
                </p>
                <p>
                  <b>House Size : </b>1450 m
                </p>
              </div>
            </div>
          </div>

          <div className="PremuimCard">
            <div>
              <div>
                <img className="myimg" src={H2} alt="Logo" />
              </div>

              <div className="des">
                <p>
                  <b>Owner : </b>Rami
                </p>
                <p className="price">
                  <b>Price: </b>260000$
                </p>
                <p>
                  <b>House Size : </b>1640 m
                </p>
              </div>
            </div>
          </div>

          <div className="PremuimCard">
            <div>
              <div>
                <img className="myimg" src={H3} alt="Logo" />
              </div>

              <div className="des">
                <p>
                  <b>Owner : </b>Mahmoud
                </p>
                <p className="price">
                  <b>Price: </b>3800000$
                </p>
                <p>
                  <b>House Size : </b>950 m
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PremiumAds;
