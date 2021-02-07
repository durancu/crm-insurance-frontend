import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

//Actions
import { customerLoadRequest } from '../../redux/actions'

//components
import { Spinner, Table, Button } from 'react-bootstrap'
import CustomerItem from './CustomerItem'
import CustomerForm from './CustomerForm'



function CustomerList({ customerLoadRequest, customers, loading, loadingDelete }) {
  //States
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [dataForm, setDataForm] = useState({});

  let no = 0;

  //Functions
  const showModal = () => {
    edit && setEdit(false)
    setModal(!modal);
  }

  const editItem = (data) => {
    edit || setEdit(true);
    setDataForm(data);
  }

  useEffect(() => {
    customerLoadRequest();
  }, [customerLoadRequest]);

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
            <th>{loadingDelete ? <Spinner animation="border" variant="danger" />
              :
              <Fragment>
                <Button variant="primary" onClick={showModal}>Create</Button>
                <CustomerForm
                  showModal={showModal}
                  modal={modal}
                  edit={edit}
                  dataForm={dataForm}
                />
              </Fragment>
            }</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ? <tr><td align="center" colSpan="5"><Spinner animation="border" variant="primary" /></td></tr> :
              customers.length > 0 ? customers.map(customer => (
                <CustomerItem no={no += 1} key={customer._id} customer={customer} showModal={showModal} edit={edit} editItem={editItem} />
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