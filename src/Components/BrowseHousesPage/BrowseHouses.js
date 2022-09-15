import React, { Component } from "react";
import axios from "axios";
import CardsBrowseHouses from "./CardsBrowseHouses";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Search from "./searchBar/SearchBar";
import FormSort from "./FormSort";
export class BrowseHouses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsHouses: [],
      numberRooms: [],
    };
  }

  chosenNumber = (event) => {
    let allData = this.state.cardsHouses;
    let arrPriceNumber = [];
    const number = parseInt(event.target.value);
    if (number === 0) {
      arrPriceNumber = allData;
    } else if (number === 1) {
      arrPriceNumber = this.state.cardsHouses.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (number === 2) {
      arrPriceNumber = this.state.cardsHouses.sort((a, b) => {
        return a.numOfRoomse - b.numOfRoomse;
      });
    } else if (number === 3) {
      arrPriceNumber = this.state.cardsHouses.sort((a, b) => {
        return a.houseSize - b.houseSize;
      });
    }

    this.setState({
      cardsHouses: arrPriceNumber,
    });
  };

  componentDidMount = () => {
    axios.get("https://sell-houses-301.herokuapp.com/house").then((result) => {
      console.log(result.data);

      this.setState({
        cardsHouses: result.data,
      });
    });
  };

  render() {
    return (
      <>
        <Header />
        <div style={{ display: "flex" }}>
          <Search />
          <FormSort chosenNumber={this.chosenNumber} />
        </div>

        <CardsBrowseHouses cardsHouses={this.state.cardsHouses} />
        <Footer />
      </>
    );
  }
}

export default BrowseHouses;
