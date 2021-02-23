import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Company = () => {
    return (
        <div>
            <h2>Company</h2>
        </div>
    )
}

Company.propTypes = {
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Company)
