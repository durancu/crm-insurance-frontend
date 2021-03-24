import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//COMPONENTS
import { Toast } from "react-bootstrap";
import MessageList from "./MessageList";
/* import moment from "moment"; */
import { MESSAGE_CONFIG } from "../../../config/messageConfig";

const Messages = ({ config, time }) => {
  const [show, setShow] = useState(false);
  const [configData, setConfigData] = useState(MESSAGE_CONFIG[0]);

  useEffect(() => {
    config && config.visible && setShow(true);
    config &&
      setConfigData(MESSAGE_CONFIG.filter(({ id }) => id === config.type)[0]);
  }, [config]);

  return configData ? (
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
          <configData.icon className={`mr-1 text-${configData.color}`} />
          <strong className={`mr-auto text-${configData.color}`}>
            {config.title}
          </strong>
          {/* <small className="text-muted">
            {config.hasOwnProperty("time") &&
              moment(time).startOf("hour").fromNow()}
          </small> */}
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
  ) : (
    <></>
  );
};

Messages.propTypes = {
  config: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  config: state.messageReducer.config,
  time: state.messageReducer.time,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
