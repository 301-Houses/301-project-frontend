import React, { Component } from "react";
import "./BrowseHouses.css";
import axios from "axios";
import CardsBrowseHouses from "./CardsBrowseHouses";
import FormSort from "./FormSort";
export class BrowseHouses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsHouses: [],
      numberRooms:[],
      
    }
  }

  
  componentDidMount = () => {
    axios.get("http://localhost:3001/house").then((result) => {
      console.log(result.data)
      
      this.setState({
        cardsHouses: result.data,
      });
    });
  };
  
  chosenNumber= (event)=>{
    let allData = this.state.cardsHouses;
    let arrPriceNumber =[];
    const number = parseInt(event.target.value)
    if(number === 0){
      arrPriceNumber = allData
    }
    else if(number === 1){
      arrPriceNumber = this.state.cardsHouses.sort((a,b)=>{
        return a.price-b.price;
      })
    }

    else if(number === 2){
      arrPriceNumber = this.state.cardsHouses.sort((a,b)=>{
        return a.numOfRoomse-b.numOfRoomse;
      })
    }
    else if(number === 3){
      arrPriceNumber = this.state.cardsHouses.sort((a,b)=>{
        return a.houseSize-b.houseSize;
      })
    }

    this.setState({
      cardsHouses: arrPriceNumber
    })
    
    
  }
    
  render() {
    
    return (
      <>
        <FormSort chosenNumber={this.chosenNumber} />
        <CardsBrowseHouses cardsHouses={this.state.cardsHouses} />
      </>
    );
  }
}

export default BrowseHouses;
