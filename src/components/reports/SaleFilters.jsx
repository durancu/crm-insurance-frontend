import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Components
import { Col, Form } from "react-bootstrap";

//Actions
import {
  userLoadRequest,
  customerLoadRequest,
  reportListRequest,
} from "../../redux/actions";

export const SaleFilters = ({
  sellers,
  userLoadRequest,
  customers,
  customerLoadRequest,
  reportListRequest,
}) => {
  const [dateRange, setDateRange] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterTypeParam, setFilterTypeParam] = useState("");
  const [filterValueParam, setFilterValueParam] = useState("");
  const [filterValues, setFilterValues] = useState([]);

  const handleDateRange = ({ target }) => {
    setDateRange(`date_range=${target.value}`);
  };

  const handleFilterType = ({ target }) => {
    setFilterType(target.value);
    setFilterTypeParam(`&filter_field=${target.value}`);
  };

  const handleFilterValue = ({ target }) => {
    setFilterValueParam(`&filter_value=${target.value}`);
  };

  useEffect(() => {
    switch (filterType) {
      case "seller":
        userLoadRequest();
        setFilterValues(sellers);
        break;
      case "customer":
        {
          customerLoadRequest();
          let data = [];
          customers.map((customer) =>
            data.push({
              _id: customer._id,
              firstName: customer.name,
              lastName: "",
            })
          );
          setFilterValues(data);
        }
        break;
      case "location":
        setFilterValues([
          { _id: "MEXICO", firstName: "Mexico", lastName: "" },
          { _id: "USA", firstName: "USA", lastName: "" },
        ]);
        break;
      default:
        setFilterValues([]);
        setFilterTypeParam("");
        setFilterValueParam("");
        break;
    }
  }, [filterType, userLoadRequest, sellers, customerLoadRequest, customers]);

  useEffect(() => {
    reportListRequest(`${dateRange}${filterTypeParam}${filterValueParam}`);
  }, [dateRange, filterTypeParam, filterValueParam, reportListRequest]);

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

        <Form.Label htmlFor="filterBy" className="my-1 mr-2">
          Filter By:
        </Form.Label>

        <Form.Control
          id="filterBy"
          name="filter_field"
          as="select"
          onChange={handleFilterType}
          defaultValue=""
          className="my-2 mr-sm-2"
        >
          <option value="">Select your choice</option>
          <option value="seller">Seller</option>
          <option value="customer">Customer</option>
          <option value="location">Location</option>
        </Form.Control>


        <Form.Control
          name="filter_field"
          as="select"
          defaultValue=""
          onChange={handleFilterValue}
          className="my-2 mr-sm-2"
        >
          <option value="">All</option>
          {filterValues.length > 0 &&
            filterValues.map((element) => (
              <option
                key={element._id}
                value={element._id}
              >{`${element.firstName} ${element.lastName}`}</option>
            ))}
        </Form.Control>

      </Form.Row>
    </Form>
  );
};

SaleFilters.propTypes = {
  sellers: PropTypes.array.isRequired,
  userLoadRequest: PropTypes.func.isRequired,
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
