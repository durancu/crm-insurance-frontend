import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Components
import { Form } from "react-bootstrap";

//Actions
import {
  userLoadRequest,
  customerLoadRequest,
  reportListRequest,
} from "../../../redux/actions";

export const SaleFilters = ({ reportListRequest }) => {
  const [dateRange, setDateRange] = useState("");

  const handleDateRange = ({ target }) => {
    setDateRange(`date_range=${target.value}`);
  };

  useEffect(() => {
    reportListRequest(`${dateRange}`);
  }, [dateRange, reportListRequest]);

  return (
    <Form inline>
      <Form.Row>
        <Form.Label htmlFor="dateRangeFilter" className="my-1 mr-2">
          Date Range:
        </Form.Label>

        <Form.Control
          id="dateRange"
          name="date_range"
          as="select"
          onChange={handleDateRange}
          className="my-2 mr-sm-2"
          custom
        >
          <option value="">All</option>
          <option value="TODAY">Today</option>
          <option value="YESTERDAY">Yesterday</option>
          <option value="WTD">This Week</option>
          <option value="LAST_WEEK">Last Week</option>
          <option value="MTD">This Month</option>
          <option value="LAST_MONTH">Last Month</option>
          <option value="YTD">This Year</option>
          <option value="LAST_YEAR">Last Year</option>
        </Form.Control>
      </Form.Row>
    </Form>
  );
};

SaleFilters.propTypes = {
  userLoadRequest: PropTypes.func.isRequired,
  sellers: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
  customerLoadRequest: PropTypes.func.isRequired,
  reportListRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sellers: state.userReducer.list,
  customers: state.customerReducer.list,
});

const mapDispatchToProps = {
  userLoadRequest,
  customerLoadRequest,
  reportListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SaleFilters);
