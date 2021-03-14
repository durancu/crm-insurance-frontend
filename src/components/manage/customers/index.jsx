import React, { useState } from "react";

//components
import { Row, Col, Button } from "react-bootstrap";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";

export default function Customers() {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [dataForm, setDataForm] = useState({});

  const showModal = () => {
    edit && setEdit(false);
    setModal(!modal);
  };

  const editItem = (data) => {
    edit || setEdit(true);
    setDataForm(data);
  };

  return (
    <>
      <Row className="mt-3">
        <Col sm="10">
          <h1>Customers</h1>
        </Col>
        <Col>
          <Button variant="primary" onClick={showModal}>
            Add New Customer
          </Button>
          <CustomerForm
            showModal={showModal}
            modal={modal}
            edit={edit}
            dataForm={dataForm}
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
