import React, { Component } from "react";
import "./Options.css";
import img1 from "../assets/card1.jpg";
import img2 from "../assets/card2.jpg";
import img3 from "../assets/card3.jpg";
export class Options extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <img src={img1}></img>
          <h2> Buy home</h2>
          <p>
            {" "}
            Find your place with an immersive photo experiecnce and the most
            listings,including things you wont find anywhere else.
          </p>
          <button> Buy a home</button>
        </div>
        <div className="card">
          <img src={img2}></img>
          <h2> Sell a home</h2>
          <p>
            {" "}
            No matter what path you take to sell your home, we can help you
            navigate a successful sale.
          </p>
          <button> see your options</button>
        </div>
        <div className="card">
          <img src={img3}></img>
          <h2> Rent a home</h2>
          <p>
            {" "}
            Whether you're looking for a single-family home,high-rise
            apartment,or something in between we'll help you find it.
          </p>
          <button> find rentals</button>
        </div>
      </div>
    );
  }
}

export default Options;
