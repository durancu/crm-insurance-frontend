import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

import { MoonLoader } from "react-spinners";
const override = css`
  display: block;
  margin: 0 auto;
`;


const Spinner = ({ color = "#0069d9", size = 40 }) => {
  return <MoonLoader color={color} size={size} margin={2} css={override}/>;
};

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Spinner;
