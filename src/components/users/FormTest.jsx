import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { counterDownAction, counterUpAction } from '../../redux/actions'

const FormTest = ({count}) => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
  })


  const counter

  /* const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value })
  }

  const handleSubmite = e => {
    e.preventDefault()
  } */

  return (
    <div>
      <p>{count}</p>
      <form>
        {/* <input type="text" name="first_name" value={state.first_name} onChange={handleChange} />
        <input type="text" name="last_name" value={state.last_name} onChange={handleChange} /> */}
        <button type="submit">Send</button>
        <button type="submit">Send</button>
      </form>

    </div>
  )
}

FormTest.propTypes = {
  counterDownAction: PropTypes.func.isRequired,
  counterUpAction: PropTypes.func.isRequired,
  count:PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  count: state.testReducer.count
})

const mapDispatchToProps = {
  counterDownAction, counterUpAction
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTest)