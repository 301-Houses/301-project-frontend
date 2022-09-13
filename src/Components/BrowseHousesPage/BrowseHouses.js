import React, { Component } from 'react'
import "./BrowseHouses.css";
import axios from 'axios'
import  CardsBrowseHouses from './CardsBrowseHouses'
export class BrowseHouses extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cardsHouses:[]
        };

      }
      
      componentDidMount=()=>{
axios.get('http://localhost:3001/house').then(result=>{
    console.log(result.data)
   
    this.setState({
        cardsHouses:result.data
    })
})
      }

  render() {
    
    return (
    <CardsBrowseHouses cardsHouses={this.state.cardsHouses}/>
    )
  }
}

export default BrowseHouses