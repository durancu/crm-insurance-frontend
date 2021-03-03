import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

//Components
import { Form } from "react-bootstrap";

//Actions
import { filterGetSuccess } from "../../../redux/actions";

import { DateRange, dateRangeByName } from "../date-factory";

const defaultDateRange = dateRangeByName(DateRange.MONTH_TO_DATE);
const DateRangeFilter = ({ filterGetSuccess, params }) => {

  const defaultForm = {
    dateRangeName: DateRange.ALL,
    startDate: defaultDateRange.startDate,
    endDate: defaultDateRange.endDate,
  };

  const [dateRange, setDateRange] = useState({
    startDate: defaultForm.startDate,
    endDate: defaultForm.endDate,
  });
  const [dateRangeName, setDateRangeName] = useState(defaultForm.dateRangeName);
  const [currentDateRange, setCurrentDateRange] = useState("");
  const [previousDate, setPreviousDate] = useState("");

  useEffect(() => {
    setDateRange(currentDateRange);
  }, [currentDateRange]);

  useEffect(() => {
    filterGetSuccess({
      "start_date": dateRange.startDate,
      "end_date": dateRange.endDate,
    });
  }, [dateRange, filterGetSuccess]);

  const handleDateRangeDropdownChange = ({ target }) => {
    setDateRangeName(target.value);
    setCurrentDateRange(dateRangeByName(target.value));
  };

  //Load data of form
  const handleChangeDate = ({ target }) => {
    setDateRangeName("CUSTOM");
    setDateRange((dateRange) => ({
      ...dateRange,
      [target.name]: moment(target.value).format("YYYY-MM-DD"),
    }));
    console.log(dateRange);
  };

  const handleFocusDate = ({ target }) => {
    setPreviousDate(target.value);
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
          <option value="CUSTOM">Custom</option>
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
            onFocus={handleFocusDate}
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
            onFocus={handleFocusDate}
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
