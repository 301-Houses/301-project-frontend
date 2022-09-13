import React, { Component } from "react";
import "./Statistics.css";
import img1 from "../../assets/for-rent.png";
import img2 from "../../assets/for-sale.png";
import img3 from "../../assets/home.png";
import img4 from "../../assets/sold.png";
export class Statistics extends Component {
  render() {
    return (
      <div className="container2">
        <div className="card2">
          <img src={img3} className="img"></img>
          <label>100</label>
          <label>
            <span>Available</span>
          </label>
        </div>
        <div className="card2">
          <img src={img1} className="img"></img>
          <label>200</label>
          <label>
            <span>For-Rent</span>
          </label>
        </div>
        <div className="card2">
          <img src={img2} className="img"></img>
          <label>100</label>
          <label>
            <span>For-Sale </span>
          </label>
        </div>
        <div className="card2">
          <img src={img4} className="img"></img>
          <label>100</label>
          <label>
            <span>Sold</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Statistics;
