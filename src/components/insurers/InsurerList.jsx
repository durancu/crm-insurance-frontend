import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

//Actions
import { insurerListRequest } from '../../redux/actions'

//components
import { Spinner, Table, Button } from 'react-bootstrap'
import InsurerItem from './InsurerItem'
import InsurerForm from './InsurerForm'



function InsurerList({ insurerListRequest, insurers, loading, loadingDelete }) {
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
    insurerListRequest();
  }, [insurerListRequest]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Liability</th>
            <th>Cargo</th>
            <th>Physical Damage</th>
            <th>WcGlUmb</th>
            <th>{loadingDelete ? <Spinner animation="border" variant="danger" />
              :
              <Fragment>
                <Button variant="primary" onClick={showModal}>Create</Button>
                <InsurerForm
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
            loading ? <tr><td align="center" colSpan="9"><Spinner animation="border" variant="primary" /></td></tr> :
              insurers.length > 0 ? insurers.map(insurer => (
                <InsurerItem no={no += 1} key={insurer._id} insurer={insurer} showModal={showModal} edit={edit} editItem={editItem} />
              )) : <tr><td align="center" colSpan="9">I not have insurers for show</td></tr>
          }
        </tbody>
      </Table>
    </div>
  )
}

InsurerList.propTypes = {
  insurerListRequest: PropTypes.func.isRequired,
  insurers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  insurers: state.insurerReducer.list,
  loading: state.insurerListStatusReducer.loading,
  loadingDelete: state.insurerDeleteStatusReducer.loading,
})

const mapDispatchToProps = {
  insurerListRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(InsurerList)