import {
  Info,
  InfoCircleFill,
  XCircleFill,
  ExclamationDiamond,
  InfoCircle,
} from "react-bootstrap-icons";

export const MESSAGE_CONFIG = [
  { id: "", color: "", icon: Info },
  { id: "warning", color: "warning", icon: ExclamationDiamond },
  { id: "success", color: "success", icon: InfoCircleFill },
  { id: "error", color: "danger", icon: XCircleFill },
  { id: "info", color: "info", icon: InfoCircle },
];
