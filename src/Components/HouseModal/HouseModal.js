import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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

class HouseModal extends React.Component {
  handleClose = () => {
    this.props.closeModal();
  };

  render() {
    return (
      <div>
        <Modal
          className="modal"
          show={this.props.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="imgM" src={imgM} alt="#" />

            <div className="info">
              <div className="house">
                <div>
                  <span>
                    <img  src={icon3} alt="#" />
                  </span>
                  <span>houseSize: 200</span>
                </div>
                <div>
                  <span>
                    <img  src={icon1} alt="#" />
                  </span>
                  <span>Roomse: 5 </span>
                </div>
                <div>
                  <span>
                    <img  src={icon2} alt="#" />
                  </span>
                  <span> houseAddress : Amman  </span>
                </div>
                <div>
                  <span>
                    <img  src={icon8} alt="#" />
                  </span>
                  <span> price:90000 jd</span>
                </div>
                <div>
                  <span>
                    <img  src={icon9} alt="#" />
                  </span>
                  <span> poster_date: 5/10/2023</span>
                </div>

              </div>

              <div className="owner">
              <div>
                  <span>
                    <img  src={icon4} alt="#" />
                  </span>
                  <span> Owner: Nour Alahmad </span>
                </div>
                <div>
                  <span>
                    <img src={icon6} alt="#" />
                  </span>
                  <span> Phone: 0799999999</span>
                </div>
                <div>
                  <span>
                    <img src={icon5} alt="#" />
                  </span>
                  <span>Email: nourNour@gmail.com </span>
                </div>              
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
           
            <Button variant="primary" onClick={this.props.handleClose}>
            <span>Read More</span>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default HouseModal;