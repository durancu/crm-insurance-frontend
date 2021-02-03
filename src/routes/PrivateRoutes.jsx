import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'


export const PrivateRoutes = ({ component: Component, authStatus, ...rest }) => {
  return <Route {...rest} render={(props) => (
    authStatus ? <Component {...props} /> : <Redirect to='/' />
  )} />
}

PrivateRoutes.propTypes = {
  authStatus: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  authStatus: state.userAuthReducer.authStatus
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes)
