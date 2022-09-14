import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class AssetsModal extends Component  {
  render() {
    return (
        <Modal size="lg" show={this.props.show} onHide={this.props.handelCloseOnHide} >
        <Modal.Header closeButton>
        <Modal.Title>{this.props.modalData.status}</Modal.Title>
         
        </Modal.Header>
        <Modal.Body> 
        <form className="form" onSubmit={this.props.handelSubmite}>
        <label for="imgURL" > imgURL</label>
    <input type="text" id="imgURL" name="imgURL" defaultValue={this.props.modalData.imgURL}></input><br/>
    
<label for="ownerName" > Owner Name</label>
    <input type="text" id="ownerName" name="ownerName" defaultValue={this.props.modalData.ownerName}></input><br/>
   
    <label for="houseAddress" > House Address</label>
    <input type="text" id="houseAddress" name="houseAddress" defaultValue={this.props.modalData.houseAddress} ></input><br/>
    
    <label for="houseSize" > House Size </label><br/>
    <input type="text" id="houseSize" name="houseSize" defaultValue={this.props.modalData.houseSize}></input><br/>

    <label for="numOfRoomse" > Number Of Rooms </label>
     <input type="text" id="numOfRoomse" name="numOfRoomse" defaultValue={this.props.modalData.numOfRoomse}></input><br/>
   
     <label for="price" > Price </label>
     <input type="text" id="price" name="price" defaultValue={this.props.modalData.price}></input><br/>

     <label for="phoneNumber" >Phone Number </label>
     <input type="text" id="phoneNumber" name="phoneNumber" defaultValue={this.props.modalData.phoneNumber}></input><br/>

     <input type="checkbox" id="ispremium" name="ispremium" ></input>
<label for="ispremium"> Premium</label><br/>

<input onClick={this.props.handleChange} type="radio" id="forRent" name="status" value="forRent" ></input>
<label for="status">for Rent</label><br/>
<input onClick={this.props.handleChange} type="radio" id="forSale" name="status" value="forSale" ></input>
<label  for="status"> for Sale</label><br/>


    <button> Submit</button>
    </form>
    </Modal.Body>
        
        <Modal.Footer>
       
        
          
        </Modal.Footer>
      </Modal>
      
    )
  }
}
export default AssetsModal;


