import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import imgM from "./1403962.jpg";
import icon1 from "./apartment.png";
import icon2 from "./navigator.png";
import icon3 from "./measurement.png";
import icon4 from "./user (1).png";
import icon5 from "./mail.png";
import icon6 from "./call-center.png";
import icon7 from "./apartment.png";
import icon8 from "./real-estate.png";
import icon9 from "./calendar.png";
import "./HouseModal.css";
export class ModalsBrowseHouses extends Component {
  render() {
    console.log(this.props.modalData);
    return (
      <div>
        <Modal
          className="modal"
          show={this.props.show}
          onHide={this.props.handelCloseOnHide}
          size="lg"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <img className="imgM" src={this.props.modalData.imgURL} alt="#" />

            <div className="info">
              <div className="house">
                <div>
                  <span>
                    <img src={icon3} alt="#" />
                  </span>
                  <span>houseSize: {this.props.modalData.houseSize}</span>
                </div>
                <div>
                  <span>
                    <img src={icon1} alt="#" />
                  </span>
                  <span>Rooms:{this.props.modalData.numOfRoomse}</span>
                </div>
                <div>
                  <span>
                    <img src={icon2} alt="#" />
                  </span>
                  <span>
                    {" "}
                    houseAddress : {this.props.modalData.houseAddress}{" "}
                  </span>
                </div>
                <div>
                  <span>
                    <img src={icon8} alt="#" />
                  </span>
                  <span> price:{this.props.modalData.price} jd</span>
                </div>
                <div>
                  <span>
                    <img src={icon9} alt="#" />
                  </span>
                  <span> poster_date: 5/10/2023</span>
                </div>
              </div>

              <div className="owner">
                <div>
                  <span>
                    <img src={icon4} alt="#" />
                  </span>
                  <span> Owner: {this.props.modalData.ownerName}</span>
                </div>
                <div>
                  <span>
                    <img src={icon6} alt="#" />
                  </span>
                  <span> Phone: {this.props.modalData.phoneNumber}</span>
                </div>
                <div>
                  <span>
                    <img src={icon5} alt="#" />
                  </span>
                  <span>Email: {this.props.modalData.email} </span>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.handelClose}>
              <span>{this.props.modalData.status}</span>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalsBrowseHouses;
