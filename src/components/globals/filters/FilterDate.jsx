import React, { useState } from "react";
import moment from "moment";

//Components
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";

//Assets
import "react-datepicker/dist/react-datepicker.css";

const FilterDate = ({ setParams }) => {
  const [state, setState] = useState(new Date());

  const handleChange = (date) => {
    setState(date);
    setParams({ month: moment(date).month() + 1, year: moment(date).year() });
  };

  return (
    <Form inline>
      <Form.Group>
        <Form.Label className="my-1 mr-2">Choose a month:</Form.Label>
        <DatePicker
          name="date"
          selected={state}
          onChange={handleChange}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          minDate={new Date("12/31/2020")}
          maxDate={new Date()}
          className="form-control xl"
        />
      </Form.Group>
    </Form>
  );
};

export default FilterDate;
