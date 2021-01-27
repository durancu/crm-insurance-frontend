import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import UserForm from './components/users/UserForm';


function App() {
  return (
    <Container>
      <UserForm/>
    </Container>
  );
}

export default App;
