import React from 'react'
import { connect } from 'react-redux'

//components
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


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Containers)
