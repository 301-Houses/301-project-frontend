import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./AssetsModal.css";
import img from "./mod.jpg";
export class AssetsModal extends Component  {
  render() {
    return (
        <Modal size="lg" show={this.props.show} onHide={this.props.handelCloseOnHide} className="modal">
        <Modal.Header  closeButton>
        <Modal.Title className='top-div'>{this.props.modalData.status}</Modal.Title>
         
        
       
       </Modal.Header>
       <Modal.Body className='bodyM'> 
       
       <form className="form" >
 <div className='first'>
       <label for="imgURL" > imgURL</label>
   <input type="text" id="imgURL" name="imgURL"  className="input-text" ></input><br/>
   
  <label for="ownerName" > Owner Name</label>
   <input type="text" id="ownerName" name="ownerName" className="input-text" ></input><br/>
  
   <label for="houseAddress" > House Address</label>
   <input type="text" id="houseAddress" name="houseAddress" className="input-text"  ></input><br/>
   
   <label for="houseSize" > House Size </label><br/>
   <input type="text" id="houseSize" name="houseSize" className="input-text" ></input><br/>
 </div>
 
 <div className='left'>
   <label for="numOfRoomse" > Number Of Rooms </label>
    <input type="text" id="numOfRoomse" name="numOfRoomse" className="input-text"></input><br/>
  
    <label for="price" > Price </label>
    <input type="text" id="price" name="price" className="input-text"></input><br/>
 
    <label for="phoneNumber" >Phone Number </label>
    <input type="text" id="phoneNumber" name="phoneNumber" className="input-text" ></input><br/>
 
 </div>
 
 <div className='last'> 
    <input type="checkbox" id="ispremium" name="ispremium" ></input>
 <label for="ispremium"> Premium</label><br/>
 
 <input   type="radio" id="forRent" name="status" ></input>
 <label for="status">for Rent</label><br/>
 <input   type="radio" id="forSale" name="status" ></input>
 <label  for="status"> for Sale</label><br/>
 
 
   <button> Submit</button>
 </div>
   </form>
   </Modal.Body>
       
       <Modal.Footer>
      
       
         
       </Modal.Footer>
      </Modal>

  
      
    )
  }
}
export default AssetsModal;
