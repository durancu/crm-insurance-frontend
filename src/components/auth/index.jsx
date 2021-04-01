import React, { useState } from "react";
import PropTypes from "prop-types";
//Redux
import { connect } from "react-redux";
import { userAuthRequest } from "../../redux/actions";
//Components
import { Form, Row, Col, Card, Button, Spinner, Image } from "react-bootstrap";
import Spinner2 from "../globals/spinner";

function Auth({ userAuthRequest, loading, error, loadingAuthCheck }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setForm((form) => ({ ...form, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validateForm(form);
    setErrors(result);

    if (!Object.keys(result).length) {
      userAuthRequest(form);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    !values.username && (errors.username = "User Name is empty");
    !values.password && (errors.password = "Password is empty");

    return errors;
  };

  

  return loadingAuthCheck ? (
    <Row style={{ marginTop: "20%" }} className="justify-content-md-center">
      <Col md="auto">
        <Spinner2 size={60} />
      </Col>
    </Row>
  ) : (
    <Row style={{ marginTop: "10%" }}>
      <Col className="ml-auto mr-auto" md="6" sm="10" lg="3" style={{minWidth:"24rem"}}>
        <Card>
          <Form onSubmit={handleSubmit}>
            <Card.Header>
              <Card.Title align="center">
                <Image src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/logo-vl17-crm.png" />
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      disabled={loading}
                      name="username"
                      type="text"
                      value={form.username}
                      onChange={handleChange}
                      autoFocus
                      isInvalid={errors.username}
                      isValid={form.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      disabled={loading}
                      name="password"
                      type="password"
                      value={form.password}
                      onChange={handleChange}
                      isInvalid={errors.password}
                      isValid={form.password}
                      autoComplete="true"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mt-3">
                    <Button
                      type="submit"
                      variant="dark"
                      size="lg"
                      block
                      disabled={loading}
                    >
                      {loading ? <Spinner animation="border" /> : `Login`}
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "center" }}>
              <Row>
                <Col style={{ fontSize: "13px" }}>
                  <small>
                    Powered by{" "}
                    <a href="https://araneconsulting.com">
                      {" "}
                      ARANE Consulting LLC
                    </a>
                    , 2021. All Rights Reserved.
                  </small>
                </Col>
              </Row>
            </Card.Footer>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

Auth.propTypes = {
  userAuthRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  loadingAuthCheck: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.userAuthStatusReducer.loading,
  error: state.userAuthStatusReducer.error,
  loadingAuthCheck: state.userCheckAuthStatusReducer.loading,
});

const mapDispatchToProps = {
  userAuthRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
