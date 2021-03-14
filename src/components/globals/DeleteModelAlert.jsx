import React, { useState } from "react";

import PropTypes from "prop-types";
import { Modal, Button, Col, Row, Spinner } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const DeleteModelAlert = ({
  modal,
  handleModal,
  id,
  deleteElement,
  loading,
  error,
  children,
}) => {
  return (
    <>
      <Modal centered show={modal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {loading && <Spinner animation="border" variant="danger" />}
            Do you want to delete the {children}?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Button
                size="lg"
                block
                variant="secondary"
                onClick={handleModal}
                disabled={loading}
              >
                No
              </Button>
            </Col>
            <Col>
              <Button
                size="lg"
                block
                variant="danger"
                onClick={() => {
                  deleteElement(id);
                  handleModal();
                }}
                disabled={loading}
              >
                Yes
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

DeleteModelAlert.propTypes = {
  id: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  deleteElement: PropTypes.func.isRequired,
};

export default DeleteModelAlert;
