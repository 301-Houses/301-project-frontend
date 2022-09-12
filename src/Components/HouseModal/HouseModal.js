import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./HouseModal.css";

class HouseModal extends React.Component {
  handleClose = () => {
    this.props.closeModal();
  };

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="owner"></div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default HouseModal;