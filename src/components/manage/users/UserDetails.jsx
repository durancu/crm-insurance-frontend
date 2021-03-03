import React, { Fragment, useState } from 'react'

import { Button, Modal } from 'react-bootstrap'

export default function UserDetails({ user }) {
  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <Fragment>
      <Button variant="warning" onClick={handleModal}>View</Button>
      <Modal show={modal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{user.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>{`Roles: ${user.roles}`}</li>
            <li>{`Base Salary: $${user.baseSalary}`}</li>
          </ul>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}
