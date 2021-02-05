import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

//Actions
import { customerLoadRequest } from '../../redux/actions'

//components
import { Spinner, Table } from 'react-bootstrap'
import CustomerItem from './CustomerItem'
//import {Table, Button} from 'react-bootstrap'



function CustomerList({ customerLoadRequest, customers, loading, loadingDelete }) {
  var no = 0;
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
            <th>Type</th>
            <th>Email</th>
            <th>Phone</th>
            <th align="center">{loadingDelete && <Spinner animation="border" variant="danger"/>}</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ? <tr><td align="center" colSpan="5"><Spinner animation="border" variant="primary" /></td></tr> :
              customers.length > 0 ? customers.map(customer => (
                <CustomerItem no={no += 1} key={customer._id} customer={customer} />
              )) : <tr><td align="center" colSpan="5">I not have customers for show</td></tr>
          }
        </tbody>
      </Table>
    </div>
  )
}

CustomerList.propTypes = {
  customerLoadRequest: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  customers: state.customerReducer.list,
  loading: state.customerLoadStatusReducer.loading,
  loadingDelete: state.customerDeleteStatusReducer.loading,
})

const mapDispatchToProps = {
  customerLoadRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)