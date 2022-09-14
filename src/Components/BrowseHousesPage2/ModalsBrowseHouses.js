import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export class ModalsBrowseHouses extends Component {
  render() {
    return (
      <Modal size="lg" show={this.props.show} onHide={this.props.handelCloseOnHide} >
      <Modal.Header closeButton>
      <Modal.Title>{this.props.modalData.status}</Modal.Title>
       
      </Modal.Header>
      <img src={this.props.modalData.imgURL} width="100%"></img>
      <h3>House informations</h3>


      <Modal.Body> 
         Number of rooms:{this.props.modalData.numOfRoomse}/price:${this.props.modalData.price}/houseAddress {this.props.modalData.houseAddress}/houseSize:{this.props.modalData.houseSize}</Modal.Body>
      <h3>Owner informations</h3>
      <p>Name:{this.props.modalData.ownerName}</p>
      <p>Email:{this.props.modalData.email}</p>
      <p>PhoneNumber:{this.props.modalData.phoneNumber}</p>
      <p>Posting Date:{this.props.modalData.poster_date}</p>
      <Modal.Footer>
     
        <Button variant="secondary" onClick={this.props.handelClose}>
          {this.props.modalData.status}
        </Button>
        
      </Modal.Footer>
    </Modal>
    )
  }
}

export default ModalsBrowseHouses;