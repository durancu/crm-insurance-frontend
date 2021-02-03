import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//components
import { Container } from 'react-bootstrap'
import Header from './Header'
import Body from './Body'

export const Containers = ({ children }) => {
  return (
    <div>
      <Header />
      <Body>
        {children}
      </Body>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.object
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Containers)
