import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import BrowsePage from "./Components/BrowseHousesPage/BrowseHouses";
import SellRent from "./Components/Sell-Rent/Sell-Rent";
import YourAssets from "./Components/YourAssestsPage/YourAssets";
import MapPage from "./Components/Map/MapPage";

import Footer from "./Components/Footer/Footer";
import { withAuth0 } from "@auth0/auth0-react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  Navigate,
} from "react-router-dom";

class App extends React.Component {
  render() {
    const { isAuthenticated, user } = this.props.auth0;

    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<MainPage />} />
          </Routes>

          <Routes>
            <Route
              exact
              path="/BrowseHouses"
              element={isAuthenticated ? <BrowsePage /> : <Navigate to="/" />}
            />
          </Routes>

          <Routes>
            <Route
              exact
              path="/Sell-Rent"
              element={isAuthenticated ? <SellRent /> : <Navigate to="/" />}
            />
          </Routes>

          <Routes>
            <Route
              exact
              path="/YourAssests"
              element={isAuthenticated ? <YourAssets /> : <Navigate to="/" />}
            />
          </Routes>

          <Routes>
            <Route
              exact
              path="/byMap"
              element={isAuthenticated ? <MapPage /> : <Navigate to="/" />}
            />
          </Routes>

          <Footer />
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);

/*
    <Routes>
            <Route
              exact
              path="/"
              element={
                <MainPage isAuthenticated={isAuthenticated} user={user} />
              }
            />
            <Route
              exact
              path="/BrowseHouses"
              element={isAuthenticated && <BrowseHouses />}
            />
            <Route
              exact
              path="/Sell-Rent"
              element={isAuthenticated && <Sell-Rent />}
            />
            <Route
              exact
              path="/YourAssests"
              element={isAuthenticated && <YourAssests />}
            />
          </Routes>

*/
