import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Statistics from "./Components/Statistics/Statistics";
import Options from "./Components/Options/Options";
import PremiumAdsSection from "./Components/PremiumAds/PremiumAds";
import WhyUsSection from "./Components/whyUs/WhyUs";
import Footer from "./Components/Footer/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Options />
        <Statistics />
        <PremiumAdsSection />
        <WhyUsSection />
        <Footer />
      </Router>
    </div>
  );
}

export default App;