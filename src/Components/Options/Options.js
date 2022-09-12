import React, { Component } from "react";
import "./Options.css";
import img1 from "../assets/card1.jpg";
import img2 from "../assets/card2.jpg";
import img3 from "../assets/card3.jpg";
import { Link } from "react-router-dom";
import LoginButton from "../OAuth/LoginButton";
export class Options extends Component {
  render() {
    return (
      <div className="container">
        <div className="cardOption">
          <img src={img1}></img>
          <h2> Buy home</h2>
          <p>
            Find your place with an immersive photo experiecnce and the most
            listings,including things you wont find anywhere else.
          </p>

          {this.props.loged ? (
            <button>
              <Link to="/BrowseHouses">Buy Now</Link>
            </button>
          ) : (
            <LoginButton text="Buy a House" />
          )}
        </div>
        <div className="cardOption">
          <img src={img2}></img>
          <h2> Sell a home</h2>
          <p>
            No matter what path you take to sell your home, we can help you
            navigate a successful sale.
          </p>
          {this.props.loged ? (
            <button>
              <Link to="/Sell-Rent">Sell Now</Link>
            </button>
          ) : (
            <LoginButton text="Sell a House" />
          )}
        </div>
        <div className="cardOption">
          <img src={img3}></img>
          <h2> Rent a home</h2>
          <p>
            Whether you're looking for a single-family home,high-rise
            apartment,or something in between we'll help you find it.
          </p>
          {this.props.loged ? (
            <button>
              <Link to="/Sell-Rent">Rent Now</Link>
            </button>
          ) : (
            <LoginButton text="Rent a house" />
          )}
        </div>
      </div>
    );
  }
}

export default Options;
