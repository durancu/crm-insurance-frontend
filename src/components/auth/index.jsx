import React, { useState } from "react";
import PropTypes from "prop-types";
//Redux
import { connect } from "react-redux";
import { userAuthRequest } from "../../redux/actions";
//Components
import { Form, Row, Col, Card, Button, Spinner } from "react-bootstrap";

function Auth({ userAuthRequest, loading, error, loadingAuthCheck }) {
  const [form, setForm] = useState({ username: "", password: "password" });

  const handleChange = ({ target }) => {
    setForm((form) => ({ ...form, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    userAuthRequest(form);
    e.preventDefault();
  };

  return loadingAuthCheck ? (
    <Spinner animation="border" variant="primary"/>
  ) : (
    <Row style={{ marginTop: "20%" }}>
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
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  disabled={loading}
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
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
