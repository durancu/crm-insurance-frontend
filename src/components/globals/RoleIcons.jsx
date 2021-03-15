import React from "react";

import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Gear } from "react-bootstrap-icons";

export const RoleIcons = ({ children, title, ...rest }) => {
  return (
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{title}</Tooltip>}>
      {children}
    </OverlayTrigger>
  );
};
