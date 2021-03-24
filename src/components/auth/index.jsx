import React, { useState } from "react";
import PropTypes from "prop-types";
//Redux
import { connect } from "react-redux";
import { userAuthRequest } from "../../redux/actions";
//Components
import { Form, Row, Col, Card, Button ,Spinner} from "react-bootstrap";
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
    <Row style={{ marginTop: "25%" }} className="justify-content-md-center">
      <Col md="auto">
        <Spinner2 size={60}/>
      </Col>
    </Row>
  ) : (
    <Row style={{ marginTop: "10%" }}>
      <Col md={{ span: 4, offset: 4 }}>
        <Card>
          <Form onSubmit={handleSubmit}>
            <Card.Header>
              <Card.Title align="center">
                <h2>VL17 Insurance Agency</h2>
                <h4>Sales Management System</h4>
              </Card.Title>
            </Card.Header>
            <Card.Body>
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
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Form.Group>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  block
                  disabled={loading}
                >
                  {loading ? <Spinner animation="border" /> : `Login`}
                </Button>
              </Form.Group>
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
