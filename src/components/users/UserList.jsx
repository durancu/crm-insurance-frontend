import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//Actions
import { userLoadRequest } from '../../redux/actions'

//assets

//components
import { Table, Button, Spinner } from 'react-bootstrap'
import { Trash, Pencil } from 'react-bootstrap-icons'

//example

function UserList({ userLoadRequest, users, loading }) {
  useEffect(() => {
    userLoadRequest()
  }, [userLoadRequest]);

  return (
    <Table>
      <thead>
        <tr>
          <th>Firts Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
        loading || users.map(user => (
            <tr key={user._id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="success" ><Pencil /></Button>{' '}
                <Button variant="danger" ><Trash /></Button>
              </td>
            </tr>
          ))
        }
        {
          loading && <tr><td colSpan="6" align="center">Loading...</td></tr>
        }
      </tbody>
    </Table>
  )
}

UserList.protoTypes = {
  userLoadRequest: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  users: state.userReducer.list,
  loading: state.userLoadStatusReducer.loading
})

const mapDispatchToProps = {
  userLoadRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)