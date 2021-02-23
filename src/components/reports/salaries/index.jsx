import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Salaries = () => {
    return (
        <div>
            <h3>Salaries</h3>
        </div>
    )
}

Salaries.propTypes = {
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Salaries)
