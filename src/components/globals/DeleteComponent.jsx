import React, { useState } from "react";

import PropTypes from "prop-types";
import { Modal, Button, Col, Row, Spinner } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const DeleteComponent = ({ id, deleteElement, loading, error, children }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Button size="lg" variant="danger" onClick={handleModal}>
        <Trash />
      </Button>
      <Modal centered show={modal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {loading && <Spinner animation="border" variant="danger" />}
            Do you want to delete this {children}?
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
                onClick={() => deleteElement(id)}
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

DeleteComponent.propTypes = {
  id: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  deleteElement: PropTypes.func.isRequired,
};

export default DeleteComponent;
