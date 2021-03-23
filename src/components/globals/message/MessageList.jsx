import React from "react";
import PropTypes from "prop-types";

const MessageList = ({ messages }) => {
  return (
    <>
      {messages.length > 0 && messages.map((message,i) => (
        <div key={i}>{message}</div>
      ))}
    </>
  );
};

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
};

export default MessageList;
