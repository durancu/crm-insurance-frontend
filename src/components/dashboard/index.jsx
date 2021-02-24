import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Row, Col } from "react-bootstrap";

export const Dashboard = () => {
    return (
        <>
            <Row className="mt-3 mb-3">
                <Col sm="8">
                    <h2>Dashboard</h2>
                </Col>
            </Row>

        </>
    )}

Dashboard.propTypes = {
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
