import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Company = (props) => {
    return (
        <div>
            <h2>Company</h2>
        </div>
    )
}

Company.propTypes = {
    props: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Company)
