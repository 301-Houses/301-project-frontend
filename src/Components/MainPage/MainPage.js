import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Statistics from "./Statistics/Statistics";
import Options from "./Options/Options";
import PremiumAdsSection from "./PremiumAds/PremiumAds";
import WhyUsSection from "./whyUs/WhyUs";

import { withAuth0 } from "@auth0/auth0-react";

class MainPage extends React.Component {
  render() {
    const { isAuthenticated, user } = this.props.auth0;
    console.log("Inside MAin");
    console.log(isAuthenticated);
    return (
      <>
        <Options loged={isAuthenticated} />
        <Statistics />
        <PremiumAdsSection />
        <WhyUsSection />
      </>
    );
  }
}

export default withAuth0(MainPage);
