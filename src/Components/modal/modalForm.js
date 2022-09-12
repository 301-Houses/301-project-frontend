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
    <input type="text" id="addres" name="address" ></input>
    <label for="addres" > Address</label><br/>

    <input type="text" id="HSize" name="size" ></input>
    <label for="HSize" > House Size</label><br/>

    <input type="text" id="NRooms" name="Rooms" ></input>
    <label for="NRooms" > Number Of Rooms</label><br/>

    <input type="text" id="Price" name="HPrice" ></input>
    <label for="Price" > Price </label><br/>

     <input type="text" id="PhoneN" name="PhoneN" ></input>
    <label for="PhoneN" > Phone Number </label><br/>
    
    <input type="radio" id="isPremium" name="Premium" ></input>
    <label for="isPremium" > Is Premium </label><br/>

    <input type="radio" id="status" name="Status" ></input>
    <label for="status" > Status</label><br/>
    
    
    </form>
</Modal.Body>
<Modal.Footer className="footer">

  <Button  type="submit" form="form1" value="Submit">Save changes</Button>
</Modal.Footer>
      </Modal.Dialog>
    );

  
    }}
    export default modal;