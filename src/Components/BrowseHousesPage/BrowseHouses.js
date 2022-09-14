import React, { Component } from "react";
import axios from "axios";
import CardsBrowseHouses from "./CardsBrowseHouses";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Search from "./searchBar/SearchBar";
export class BrowseHouses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsHouses: [],
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:3001/house").then((result) => {
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
        <Search></Search>
        <CardsBrowseHouses cardsHouses={this.state.cardsHouses} />
        <Footer />
      </>
    );
  }
}

export default BrowseHouses;
