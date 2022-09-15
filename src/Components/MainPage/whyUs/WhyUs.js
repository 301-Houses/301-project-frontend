import React from "react";
import img1 from "./target.png";
import img2 from "./home.png";
import "./whyUS.css";

import img3 from "./laurel-wreath.png";

class WhyUs extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ fontSize: "50px", marginTop: "10px" }}>WHY US</h1>
        <div className="whyUs">
          <div className="part">
            <img className="myimg2" src={img1} alt="Logo" />
            <p>
              <h1>Accurate Data</h1> <br></br>
            </p>
          </div>

          <div className="part">
            <img className="myimg2" src={img2} alt="Logo" />

            <p>
              <h1>Suitable Needs</h1> <br></br>
            </p>
          </div>

          <div className="part">
            <img className="myimg2" src={img3} alt="Logo" />
            <p>
              <h1>Time Saver</h1> <br></br>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default WhyUs;
