import React from "react";

import "./searchBar.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

class SearchBar extends React.Component {
  handleClose = () => {
    this.props.closeModal();
  };

  render() {
    return (
      <div style={{ width: "70vw" }}>
        <InputGroup className="mb-3"></InputGroup>
        <div className="s">
          <div id="cover">
            <form method="get" action="">
              <div className="tb">
                <div className="td">
                  <input type="text" placeholder="Search" required></input>
                </div>
                {/* <div className="td" id="s-cover">
                  <DropdownButton
                    variant="outline-secondary"
                    title="Sorting"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item className="itemMenu" href="#">
                      Price
                    </Dropdown.Item>
                    <Dropdown.Item className="itemMenu" href="#">
                      Date
                    </Dropdown.Item>
                    <Dropdown.Item className="itemMenu" href="#">
                      Location
                    </Dropdown.Item>
                  </DropdownButton>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
