import axios from "axios";
import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import AssetsCards from "./AssetsCards";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class YourAssests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }
  componentDidMount = () => {
    const { user } = this.props.auth0;
    let email = user.email;
    axios
      .get(`https://sell-houses-301.herokuapp.com/house/${email}`)
      .then((result) => {
        this.setState({
          userData: result.data,
        });
        console.log(this.state.userData);
      });
  };
  render() {
    return (
      <>
        <Header />
        <AssetsCards userData={this.state.userData} />
        <Footer />
      </>
    );
  }
}

export default withAuth0(YourAssests);
