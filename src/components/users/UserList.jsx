import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

//Actions
import { userLoadRequest } from '../../redux/actions'

//components
import { Spinner, Table, Button } from 'react-bootstrap'
import UserItem from './UserItem'
import UserForm from './UserForm'



function UserList({ userLoadRequest, users, loading, loadingDelete }) {
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
    userLoadRequest();
  }, [userLoadRequest]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Location</th>
            <th>Position</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Details</th>
            <th>{loadingDelete ? <Spinner animation="border" variant="danger" />
              :
              <Fragment>
                <Button variant="primary" onClick={showModal}>Create</Button>
                <UserForm
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
              users.length > 0 ? users.map(user => (
                <UserItem no={no += 1} key={user._id} user={user} showModal={showModal} edit={edit} editItem={editItem} />
              )) : <tr><td align="center" colSpan="5">I not have users for show</td></tr>
          }
        </tbody>
      </Table>
    </div>
  )
}

UserList.propTypes = {
  userLoadRequest: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  users: state.userReducer.list,
  loading: state.userLoadStatusReducer.loading,
  loadingDelete: state.userDeleteStatusReducer.loading,
})

const mapDispatchToProps = {
  userLoadRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)