import React from "react";

import { Tooltip, OverlayTrigger } from "react-bootstrap";

export const TooltipIcon = ({ children, title, ...rest }) => {
  return (
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{title}</Tooltip>}>
      {children}
    </OverlayTrigger>
  );
};
