import React from "react";
import PropTypes from "prop-types";

const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.length > 0 && messages.map((message) => (
        <li key={message}>{message}</li>
      ))}
    </ul>
  );
};

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
};

export default MessageList;
