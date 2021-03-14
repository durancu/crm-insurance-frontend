import React,{useState} from "react";

//components
import { Row, Col,Button } from "react-bootstrap";
import InsurerForm from "./InsurerForm";
import InsurerList from "./InsurerList";

export default function Insurers() {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  }


  return (
    <>
      <Row className="mt-3">
        <Col sm="10">
          <h1>Insurers</h1>
        </Col>
        <Col>
          <Button variant="primary" onClick={showModal}>
            Create
          </Button>
          <InsurerForm
            showModal={showModal}
            modal={modal}
            edit={false}
            dataForm={{}}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <InsurerList />
        </Col>
      </Row>
    </>
  );
}
