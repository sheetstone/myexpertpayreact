import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";

const SuccessModal = (props) => {
  const { show, noed, yesed } = props;

  return (
    <Modal show={show} onHide={noed} backdrop="static" keyboard={true}>
      <Modal.Header closeButton>
        <Modal.Title>Case Added Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to add more cases?</Modal.Body>
      <Modal.Footer>
        <Button variant="link" onClick={noed}>
          No
        </Button>
        <Button variant="primary" onClick={yesed}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
