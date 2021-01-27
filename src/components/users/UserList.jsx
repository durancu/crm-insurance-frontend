import React from 'react'

//assets
import '../components.css'

//components
import {Table,Button} from 'react-bootstrap'
import {Trash,Pencil} from 'react-bootstrap-icons'

export default function UserList({users}) {
  return (
    <Table>
      <thead>
        <th>Firts Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Role</th>
        <th></th>
      </thead>
      <tbody>
        {users.map(user=>(
          <tr key={user._id}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.role}</td>
            <td>
              <Button variant="success" sm><Pencil /></Button>{' '}
              <Button variant="danger" sm><Trash/></Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
