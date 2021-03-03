import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

//Components
import { Form } from "react-bootstrap";

//Actions
import {
  userLoadRequest,
  customerLoadRequest,
  saleListRequest,
  reportListRequest,
  dashboardGetRequest,
} from "../../../redux/actions";
import { DateRange, dateRangeByName } from "../date-factory";

const DateRangeFilter = ({
  saleListRequest,
  reportListRequest,
  dashboardGetRequest,
  model,
  config,
}) => {
  const defaultDateRange = dateRangeByName(DateRange.MONTH_TO_DATE);

  const defaultForm = {
    dateRange: DateRange.MONTH_TO_DATE,
    startDate: defaultDateRange.start,
    endDate: defaultDateRange.end,
  };

  const [startDate, setStartDate] = useState(defaultForm.startDate);
  const [endDate, setEndDate] = useState(defaultForm.endDate);
  const [dateRange, setDateRange] = useState(defaultForm.dateRange);
  const [currentDateRange, setCurrentDateRange] = useState("");
  const [previousDate, setPreviousDate] = useState("");
  const [params, setParams] = useState({
    start_date: defaultForm.startDate,
    end_date: defaultForm.endDate,
  });

  useEffect(() => {
    switch (model) {
      case "sale":
        saleListRequest(
          `start_date=${defaultForm.startDate}&end_date=${defaultForm.endDate}`
        );
        break;
      case "dashboard":
        console.log(config);
        console.log(params);
        if (config) {
          dashboardGetRequest(config, params);
        }

        break;
      case "report":
        reportListRequest(
          `start_date=${defaultForm.startDate}&end_date=${defaultForm.endDate}`
        );
        break;

      default:
        break;
    }
  }, [
    defaultForm.endDate,
    defaultForm.startDate,
    model,
    config,
    reportListRequest,
    saleListRequest,
    startDate,
    endDate,
    dashboardGetRequest,
    params,
  ]);

  useEffect(() => {
    setStartDate(currentDateRange.start);
    setEndDate(currentDateRange.end);
  }, [currentDateRange]);

  const handleDateRangeDropdownChange = ({ target }) => {
    setDateRange(target.value);
    setCurrentDateRange(dateRangeByName(target.value));
    handleSubmit();
  };

  //Load data of form
  const handleChangeDate = ({ target }) => {
    switch (target.name) {
      case "startDate":
        setStartDate(moment(target.value).format("YYYY-MM-DD"));
        break;
      case "endDate":
        setEndDate(moment(target.value).format("YYYY-MM-DD"));
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

    handleSubmit();
  };

  const handleSubmit = () => {
    
    setParams({
      start_date: startDate,
      end_date: endDate,
    });

    switch (model) {
      case "sale":
        saleListRequest(`start_date=${startDate}&end_date=${endDate}`);
        break;
      case "dashboard":
        console.log(params); 
        dashboardGetRequest(config, params);
        break;
      case "report":
        reportListRequest(`start_date=${startDate}&end_date=${endDate}`);
        break;
      default:
    }
  };

  return (
    <Form inline>
      <Form.Row>
        <Form.Label htmlFor="dateRange" className="my-1 mr-2">
          Date:
        </Form.Label>

        <Form.Control
          name="dateRange"
          as="select"
          onChange={handleDateRangeDropdownChange}
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

        <Form.Group hidden={dateRange===""}>
          <Form.Label htmlFor="startDate" className="my-1 mr-2">
            From:
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
        <Form.Group hidden={dateRange===""} >
          <Form.Label htmlFor="endDate" className="my-1 mr-2">
            To:
          </Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleChangeDate}
            onBlur={handleBlurDate}
            onFocus={handleFocusDate}
            className="my-1 mr-2"
            required
          />
        </Form.Group>

        {/* <Form.Group>
          <Button type="submit" variant="dark">
            Apply
          </Button>
        </Form.Group> */}
      </Form.Row>
    </Form>
  );
};

DateRangeFilter.propTypes = {
  userLoadRequest: PropTypes.func.isRequired,
  sellers: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
  customerLoadRequest: PropTypes.func.isRequired,
  model: PropTypes.string.isRequired,
  //Functions
  saleListRequest: PropTypes.func.isRequired,
  reportListRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sellers: state.userReducer.list,
  customers: state.customerReducer.list,
});

const mapDispatchToProps = {
  userLoadRequest,
  customerLoadRequest,
  saleListRequest,
  reportListRequest,
  dashboardGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangeFilter);
