import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Toast } from "react-bootstrap";
import MessageList from "./MessageList";
import moment from "moment";

const Messages = ({ config }) => {
  const [show, setShow] = useState(false);
  const [color] = useState({
    warning: "warning",
    success: "success",
    error: "danger",
    info: "info",
  });

  useEffect(() => {
    config && config.visible && setShow(true);
  }, [config]);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="d-flex justify-content-center align-items-center"
    >
      <Toast
       /*  className={`bg-${color[config.type]}`} */
        aria-live="assertive"
        aria-atomic="true"
        role="alert"
        onClose={() => setShow(false)}
        show={show}
        /* delay={3000}
        autohide */
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className={`mr-auto text-${color[config.type]}`}>{config.title}</strong>
          <small className="text-muted">
            {config.hasOwnProperty("time") &&
              moment(config.time).startOf("hour").fromNow()}
          </small>
        </Toast.Header>
        {config.hasOwnProperty("messages") && (
          <Toast.Body>
            {config.hasOwnProperty("statusCode") && (
              <>
                <strong>Error:</strong> config.statusCode
              </>
            )}
            {Object.keys(config.messages).length > 0 && (
              <MessageList messages={config.messages} />
            )}
          </Toast.Body>
        )}
      </Toast>
    </div>
  );
};

Messages.propTypes = {
  config: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  config: state.messageReducer.config,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
