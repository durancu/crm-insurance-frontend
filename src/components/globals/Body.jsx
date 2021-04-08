import React from "react";
import { Container } from "react-bootstrap";
import Messages from "./message";

export default function Body({ children }) {
  return (
    <Container fluid className="personalized">
      <Messages />
      {children}
    </Container>
  );
}
