import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

//Components
import { Form } from "react-bootstrap";

//Actions
import { filterGetSuccess } from "../../../redux/actions";

import { DateRange, dateRangeByName } from "../date-factory";

const defaultDateRange = dateRangeByName(DateRange.THIS_FISCAL_MONTH);
const DateRangeFilter = ({ filterGetSuccess, setParams }) => {

  const [dateRange, setDateRange] = useState({
    startDate: defaultDateRange.startDate,
    endDate: defaultDateRange.endDate,
  });
  const [dateRangeName, setDateRangeName] = useState(DateRange.THIS_FISCAL_MONTH);

  useEffect(() => {
    console.log(dateRange);
    setParams({
      "start_date": dateRange.startDate,
      "end_date": dateRange.endDate,
    });
  }, [dateRange, filterGetSuccess, setParams]);

  const handleDateRangeDropdownChange = ({ target }) => {
    setDateRangeName(target.value);
    setDateRange(dateRangeByName(target.value))
  };

  //Load data of form
  const handleChangeDate = ({ target }) => {
    setDateRangeName(DateRange.CUSTOM);
    setDateRange((dateRange) => ({
      ...dateRange,
      [target.name]: moment(target.value).format("YYYY-MM-DD"),
    }));
  };

  return (
    <Form inline>
      <Form.Row>
        <Form.Label htmlFor="dateRangeName" className="my-1 mr-2">
          Date:
        </Form.Label>
        <Form.Control
          name="dateRangeName"
          as="select"
          onChange={handleDateRangeDropdownChange}
          value={dateRangeName}
          className="my-2 mr-sm-2"
          readOnly={true}
          custom
        >
          <option value="">All</option>
          <option value={DateRange.THIS_FISCAL_MONTH}>This Payment Month</option>
          <option value={DateRange.LAST_FISCAL_MONTH}>Last Payment Month</option>
          <option value={DateRange.TODAY}>Today</option>
          <option value={DateRange.YESTERDAY}>Yesterday</option>
          <option value={DateRange.WEEK_TO_DATE}>This Week</option>
          <option value={DateRange.LAST_WEEK}>Last Week</option>
          <option value={DateRange.MONTH_TO_DATE}>This Month</option>
          <option value={DateRange.LAST_MONTH}>Last Month</option>
          <option value={DateRange.YEAR_TO_DATE}>This Year</option>
          <option value={DateRange.LAST_YEAR}>Last Year</option>
          <option value={DateRange.CUSTOM}>Custom</option>
        </Form.Control>

        <Form.Group hidden={dateRangeName === ""}>
          <Form.Label htmlFor="startDate" className="my-1 mr-2">
            From:
          </Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={dateRange.startDate}
            onChange={handleChangeDate}
            className="my-1 mr-2"
            required
          />
        </Form.Group>
        <Form.Group hidden={dateRangeName === ""}>
          <Form.Label htmlFor="endDate" className="my-1 mr-2">
            To:
          </Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={dateRange.endDate}
            onChange={handleChangeDate}
            className="my-1 mr-2"
            required
          />
        </Form.Group>

      </Form.Row>
    </Form>
  );
};

DateRangeFilter.propTypes = {
  //Functions
  filterGetSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  filterGetSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangeFilter);
