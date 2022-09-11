import React from "react";
import img1 from "./target.png";
import img2 from "./home.png";
import "./whyUS.css";

import img3 from "./laurel-wreath.png";

class WhyUs extends React.Component {
  render() {
    return (
      <div className="whyUs">
        <div className="part">
          <img className="myimg2" src={img1} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
            pulvinar lorem felis nec erat
          </p>
        </div>

        <div className="part">
          <img className="myimg2" src={img2} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
            pulvinar lorem felis nec erat
          </p>
        </div>

        <div className="part">
          <img className="myimg2" src={img3} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
            pulvinar lorem felis nec erat
          </p>
        </div>
      </div>
    );
  }
}

export default WhyUs;
