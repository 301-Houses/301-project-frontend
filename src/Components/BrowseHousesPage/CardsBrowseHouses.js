import React, { Component } from "react";
import img00 from "./1403962.jpg";
import "./HouseCard.css";
import icon1 from "./navigator.png";
import icon2 from "./real-estate.png";
import ModalsBrowseHouses from "./ModalsBrowseHouses";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export class CardsBrowseHouses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModals: false,
      modalData: {},
      sold: false,
    };
  }
  handleShow = (ele) => {
    this.setState({
      showModals: true,
      modalData: ele,
    });
  };
  handelClose = () => {
    let data = this.state.modalData;
    let obj = {
      imgURL: data.imgURL,
      ownerName: data.ownerName,
      houseAddress: data.houseAddress,
      email: data.email,
      houseSize: data.houseSize,
      numOfRoomse: data.numOfRoomse,
      isSold: true,
      price: data.price,
      phoneNumber: data.phoneNumber,
      status: data.status,
    };

    axios.put(`http://localhost:3001/house/${data._id}`, obj).then((result) => {
      this.setState({
        sold: result.data.isSold,
      });
      console.log(this.state.sold);
    });
    this.setState({
      showModals: false,
    });
  };

  handelCloseOnHide = () => {
    this.setState({
      showModals: false,
    });
  };
  render() {
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {this.props.cardsHouses.map((ele) => {
            console.log("ASDasdasdasd");
            console.log(ele.status);
            return (
              <Col>
                <div className="houseCard">
                  <div
                    id="houseCard_hover"
                    className="houseCard_box"
                    onClick={() => this.handleShow(ele)}
                  >
                    <label className="premium">{ele.status}</label>

                    <img className="img00" src={ele.imgURL} alt="#" />
                    <div className="det">
                      <div>
                        <span>
                          <img src={icon2} alt="#" />
                        </span>
                        {/* <span></span> */}
                        <h1>$ {ele.price} </h1>
                      </div>
                      <div>
                        <span>
                          <img src={icon1} alt="#" />
                        </span>
                        <span id="loc">{ele.houseAddress}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        <ModalsBrowseHouses
          show={this.state.showModals}
          handelClose={this.handelClose}
          modalData={this.state.modalData}
          handelCloseOnHide={this.handelCloseOnHide}
        />
      </>
    );
  }
}

export default CardsBrowseHouses;
