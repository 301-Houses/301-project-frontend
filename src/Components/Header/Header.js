import React from "react";
import { PopupMenu } from "react-simple-widgets";

import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
// import LoginButton from "./LoginButton";
// import LogoutButton from "./LogoutButton";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./test2.jpg";
import "./Header.css";
import profileImg from "./profileIMG.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "mainNavBar",
    };
  }
  handleScroll = (e) => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 690) {
      this.setState({ style: "mainNavBar sticky" });
    }
    if (window.pageYOffset < 690) {
      this.setState({ style: "mainNavBar" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    let email = this.props.email || "alaslabood@gmail.com";
    let given_name = this.props.given_name || "Abdel rahman alasal";
    let picture = this.props.picture || profileImg;
    let language = this.props.locale || "EN";

    let isLoggedIn = true;
    return (
      <div onScroll={this.handleScroll}>
        <div className="navbarBackground"></div>

        <Navbar collapseOnSelect expand="lg" className={this.state.style}>
          <div style={{ display: "flex" }}>
            <Navbar.Brand className="logo">
              <Link to="/" className="nav-link">
                <img
                  width="66px"
                  src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
                ></img>
              </Link>
            </Navbar.Brand>

            {isLoggedIn && (
              <div className="navbarLeftDiv">
                <div className="leftSideNav">
                  <NavItem>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link to="/" className="nav-link">
                      Sell
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link to="/BrowseHouses" className="nav-link">
                      Browse Houses
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link to="/" className="nav-link">
                      Your Assests
                    </Link>
                  </NavItem>
                </div>
              </div>
            )}
          </div>

          {!isLoggedIn && (
            <div className="navbarRightDiv">
              <NavItem>
                <Link to="/" className="nav-link">
                  About us
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">
                  Sign In
                </Link>
              </NavItem>
            </div>
          )}

          {isLoggedIn && (
            <PopupMenu className="profile">
              <button className=" profile">
                <img src={picture} width={"40px"} />
              </button>

              <div className="profileCard text-start">
                <div className="card-body px-4 py-4">
                  <div id="circle-avatar" className="text-center mx-auto mb-4">
                    <span>{given_name.slice(0, 1).toUpperCase()}</span>
                  </div>

                  <h5 className="text-center mb-0">{given_name}</h5>
                  <br />
                  <p className="text-center mb-2">{email}</p>

                  <hr />

                  <p
                    className="mb-0"
                    style={{
                      color: "#bebebe",
                      fontWeight: "bold",
                      fontSize: 12,
                    }}
                  >
                    Language
                  </p>

                  <p style={{ fontSize: 12 }}>{language.toUpperCase()}</p>

                  <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

                  <hr style={{ margin: "0 -24px 24px" }} />

                  <div className="d-grid">
                    <button className="btn btn-secondary">
                      <small>Logout</small>
                    </button>
                  </div>
                </div>
              </div>
            </PopupMenu>
          )}
        </Navbar>

        <div className="headerContent">
          <div className="firstHeader">
            <h1>Move to What Moves You</h1>
            <h1> Historic & Charming Apartments </h1>
            <p>
              With Sweet Home We are proud to present carefully selected Houses{" "}
              <br /> in the most elegant way to your admiration and
              satisfaction.
            </p>

            <div className="getStarted">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-mdb-ripple-color="dark"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
