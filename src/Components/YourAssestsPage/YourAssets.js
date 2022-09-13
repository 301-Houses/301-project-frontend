import axios from "axios";
import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import AssetsCards from "./AssetsCards";

class YourAssests extends React.Component {
  constructor(props){
    super(props)
    this.state={
userData:[]
    }
    
}
componentDidMount=()=>{
  const {  user } = this.props.auth0;
 let email=user.email
  axios.get('http://localhost:3001/house/test2@gmail.com').then(result=>{

  this.setState({
    userData:result.data
  })
  console.log(this.state.userData)
  })
  

  }
  render() {
    return (
      <>
      <AssetsCards userData={this.state.userData} />
      
      </>
    );
  }
}

export default withAuth0(YourAssests);
