import {
  Info,
  InfoCircleFill,
  XCircleFill,
  ExclamationDiamond,
  InfoCircle,
} from "react-bootstrap-icons";
import { LANGUAGE } from "./language";

export const MESSAGE_CONFIG = [
  { id: "", color: "", icon: Info },
  { id: "warning", color: "warning", icon: ExclamationDiamond },
  { id: "success", color: "success", icon: InfoCircleFill },
  { id: "error", color: "danger", icon: XCircleFill },
  { id: "info", color: "info", icon: InfoCircle },
];

/** Formatter message
 * @param {object} response
 * @param {string} type
 * @param {string} action
 * @returns {object} config
 */
export const formatterMessage = (response, type, action) => {
  const config = {};
  const { status, data } = response;

  if (status >= 200 && status < 300) {
    config.title = LANGUAGE.en.message.success[type][action];
    config.type = "success";
    config.messages = [LANGUAGE.en.message.success[type][action]];
  } else {
    config.title = LANGUAGE.en.message.fail[type][action];
    config.type = "error";
    config.messages = [LANGUAGE.en.message.error[type][action], data.message];
  }

  config.visible = true;
  return config;
};
