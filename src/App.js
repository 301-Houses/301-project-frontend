import React from "react";
import WhyUsSection from "./Components/whyUs/WhyUs";
import PremiumAdsSection from "./Components/PremiumAds/PremiumAds";
import Options from './Components/Options/Options';
import Statistics from './Components/Statistics/Statistics';
import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Statistics/>
        <Options/>
        <PremiumAdsSection/>
      
      </Router>
    </div>
  );
}

export default App;

