import React, { useState } from "react";
import moment from "moment";

//Components
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";

//Assets
import "react-datepicker/dist/react-datepicker.css";

const FilterDate = ({ setParams, params }) => {
  const [state, setState] = useState(new Date());

  const handleChange = (date) => {
    setState(date);
    console.log(params);
    setParams({
      ...params,
      month: moment(date).month() + 1,
      year: moment(date).year(),
    });
  };

  return (
    <Form inline>
      <Form.Group>
        <Form.Label className="my-1 mr-2">Month:</Form.Label>
        <DatePicker
          name="date"
          selected={state}
          onChange={handleChange}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          //maxDate={new Date()}
          className="form-control xl"
        />
      </Form.Group>
    </Form>
  );
};

export default FilterDate;
