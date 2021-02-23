import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Salaries = (props) => {
    return (
        <div>
            <h3>Salaries</h3>
        </div>
    )
}

Salaries.propTypes = {
    props: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Salaries)
