import React from "react";
import { Container } from "react-bootstrap";
import Messages from "./message";

export default function Body({ children }) {
  return (
    <Container fluid style={{ maxWidth: "98%", marginBottom:"80px" }}>
      <Messages />
      {children}
    </Container>
  );
}
