import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

//Components
import { Button, Form } from "react-bootstrap";

//Actions
import {
  userLoadRequest,
  customerLoadRequest,
  saleListRequest,
} from "../../redux/actions";
import { DateRange, dateRangeByName } from "../globals/date-factory";

export const SalesFilters = ({ saleListRequest }) => {
  const defaultDateRange = dateRangeByName(DateRange.MONTH_TO_DATE);

  const defaultForm = {
    dateRange: DateRange.MONTH_TO_DATE,
    startDate: defaultDateRange.start,
    endDate: defaultDateRange.end,
  };

  const [inputDateStart, setInputDateStart] = useState(defaultForm.startDate);
  const [inputDateEnd, setInputDateEnd] = useState(defaultForm.endDate);
  const [startDate, setStartDate] = useState(defaultForm.startDate);
  const [endDate, setEndDate] = useState(defaultForm.endDate);
  const [dateRange, setDateRange] = useState(defaultForm.dateRange);
  const [currentDateRange, setCurrentDateRange] = useState("");
  const [previousDate, setPreviousDate] = useState("");

  useEffect(() => {
    saleListRequest(
      `start_date=${defaultForm.startDate}&end_date=${defaultForm.endDate}`
    );
  }, [defaultForm.endDate, defaultForm.startDate, saleListRequest]);

  const calculateDatesByRange = ({ target }) => {
    setDateRange(target.value);
    setCurrentDateRange(dateRangeByName(target.value));
    setStartDate(currentDateRange.start);
    setEndDate(currentDateRange.end);
    console.log('startDate', currentDateRange)
  };

  //Load data of form
  const handleChangeDate = ({ target }) => {
    switch (target.name) {
      case "startDate":
        setStartDate(moment(target.value).format("YYYY-MM-DD"));
        setInputDateStart(moment(target.value).format("YYYY-MM-DD"));
        break;
      case "endDate":
        setEndDate(moment(target.value).format("YYYY-MM-DD"));
        setInputDateEnd(moment(target.value).format("YYYY-MM-DD"));
        break;
      default:
        break;
    }
  };

  //Load data of form
  const handleFocusDate = ({ target }) => {
    setPreviousDate(target.value);
  };

  //Load data of form
  const handleBlurDate = ({ target }) => {
    switch (target.name) {
      case "startDate":
        if (previousDate !== target.value) {
          setDateRange("CUSTOM");
        }
        break;
      case "endDate":
        if (previousDate !== target.value) {
          setDateRange("CUSTOM");
        }
        break;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saleListRequest(`start_date=${startDate}&end_date=${endDate}`);
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Label htmlFor="dateRange" className="my-1 mr-2">
          Date:
        </Form.Label>

        <Form.Control
          name="dateRange"
          as="select"
          onChange={calculateDatesByRange}
          value={dateRange}
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

        <Form.Group>
          <Form.Label htmlFor="startDate" className="my-1 mr-2">
            From:{" "}
          </Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleChangeDate}
            onBlur={handleBlurDate}
            onFocus={handleFocusDate}
            className="my-1 mr-2"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="endDate" className="my-1 mr-2">
            {" "}
            To:
          </Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={inputDateEnd}
            onChange={handleChangeDate}
            onBlur={handleBlurDate}
            onFocus={handleFocusDate}
            className="my-1 mr-2"
            required
          />
        </Form.Group>

        <Form.Group>
          <Button type="submit" variant="dark">
            Apply
          </Button>
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

SalesFilters.propTypes = {
  userLoadRequest: PropTypes.func.isRequired,
  sellers: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
  customerLoadRequest: PropTypes.func.isRequired,
  saleListRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sellers: state.userReducer.list,
  customers: state.customerReducer.list,
});

const mapDispatchToProps = {
  userLoadRequest,
  customerLoadRequest,
  saleListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesFilters);
