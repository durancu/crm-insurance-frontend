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

  console.log(DateRange.MONTH_TO_DATE);
  const defaultForm = {
    dateRange: DateRange.MONTH_TO_DATE,
    startDate: defaultDateRange.start,
    endDate: defaultDateRange.end,
  }

  const [startDate, setStartDate] = useState(defaultForm.startDate);
  const [endDate, setEndDate] = useState(defaultForm.endDate);

  const calculateDatesByRange = ({ target }) => {
    console.log(target.value);
    const currentDateRange = dateRangeByName(target.value);
    //setStartDate(`${currentDateRange.start}`);
    setStartDate(currentDateRange.startDate);
    setEndDate(currentDateRange.endDate);
  };

  //Load data of form
  const handleDateChange = ({ target }) => {
    console.log(target.name)
    console.log(target.value)

    switch (target.name) {
      case "startDate":
        setStartDate(moment(target.value).format("YYYY-MM-DD"));
        break;
      case "endDate":
        setEndDate(moment(target.value).format("YYYY-MM-DD"));
        break;
/*       case "dateRange":
        const currentDateRange = dateRangeByName(target.value);
        setStartDate(moment(currentDateRange.startDate).format("YYYY-MM-DD"));
        setEndDate(moment(currentDateRange.endDate).format("YYYY-MM-DD"));
        break; */
        default:
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    saleListRequest(`start_date=${startDate}&end_date=${endDate}`);
  };

  useEffect(() => {

  });

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

        <Form.Group>
          <Form.Label htmlFor="startDate" className="my-1 mr-2">From: </Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleDateChange}
            className="my-1 mr-2"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="endDate" className="my-1 mr-2"> To:</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleDateChange}
            className="my-1 mr-2"
            required
          />
        </Form.Group>

        <Form.Group>
          <Button type="submit" variant="dark">Apply</Button>
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
