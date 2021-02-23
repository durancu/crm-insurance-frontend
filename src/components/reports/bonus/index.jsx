import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Bonus = (props) => {
    return (
        <div>
            <h2>Bonus</h2>
        </div>
    )
}

Bonus.propTypes = {
    props: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Bonus)
