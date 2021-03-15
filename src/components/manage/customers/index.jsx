import React, { useState } from "react";

//components
import { Row, Col, Button } from "react-bootstrap";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";

export default function Customers() {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  /* const [dataForm, setDataForm] = useState({}); */

  const showModal = () => {
    edit && setEdit(false);
    setModal(!modal);
  };

  return (
    <>
      <Row className="mt-3">
        <Col sm="10">
          <h2>Customers</h2>
        </Col>
      </Row>
      <Row className="mt-0 mb-2">
      <Col style={{textAlign:"right"}}> 
          <Button variant="primary" onClick={showModal}>
            Add New Customer
          </Button>
          <CustomerForm
            showModal={showModal}
            modal={modal}
            edit={false}
            dataForm={{}}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <CustomerList />
        </Col>
      </Row>
      
      
    </>
  );
}
