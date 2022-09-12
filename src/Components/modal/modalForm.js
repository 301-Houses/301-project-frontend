import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./modalForm.css";
class modal extends React.Component {
    render() {
      return (
        <Modal.Dialog  className="dialog">
  <Modal.Header closeButton className="header" />

<Modal.Body className="mBody">
<form className="form">
<label for="addres" > Address</label>
    <input type="text" id="addres" name="address" ></input><br/>
   
    <label for="HSize" > House Size</label>
    <input type="text" id="HSize" name="size" ></input><br/>
    
    <label for="NRooms" > Number Of Rooms</label>
    <input type="text" id="NRooms" name="Rooms" ></input><br/>
   
    <label for="Price" > Price </label><br/>
    <input type="text" id="Price" name="HPrice" ></input><br/>

    <label for="PhoneN" > Phone Number </label>
     <input type="text" id="PhoneN" name="PhoneN" ></input><br/>
   
     <label  class="rad-label" for="isPremium" > Is Premium </label>
    <input class="rad-input" type="radio" id="isPremium" name="Premium" ></input><br/>
   
    <label  class="rad-label" for="status" > Status</label>
    <input class="rad-input" type="radio" id="status" name="Status" ></input><br/>
   
    
    
    </form>
</Modal.Body>
<Modal.Footer className="footer">

  <Button className="bb"  type="submit" form="form1" value="Submit">Save changes</Button>
</Modal.Footer>
      </Modal.Dialog>
    );

  
    }}
    export default modal;