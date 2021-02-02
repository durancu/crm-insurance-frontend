import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

//Actions
import { customerLoadRequest } from '../../redux/actions'

//components
import { Table } from 'react-bootstrap'
import CustomerItem from './CustomerItem'
//import {Table, Button} from 'react-bootstrap'



function CustomerList({ customerLoadRequest, customers }) {

  useEffect(() => {
    customerLoadRequest()
  }, [customerLoadRequest])

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th colSpan="2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            customers.length > 0 && customers.map(customer => (
              <CustomerItem key={customer._id} customer={customer} />
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

CustomerList.propTypes = {
  customerLoadRequest: PropTypes.func.isRequired,
  customers: PropTypes.array,
}

const mapStateToProps = (state) => ({
  customers: state.customerReducers.list
})

const mapDispatchToProps = {
  customerLoadRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)