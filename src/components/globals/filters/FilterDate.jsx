import React, { useState } from "react";

//Components
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";

//Assets
import "react-datepicker/dist/react-datepicker.css";

const FilterDate = ({ setParams, params }) => {
  const [state, setState] = useState(new Date().setMonth(params.month-1));

  const handleChange = (date) => {
    setState(date);
    setParams({
      ...params,
      month: date.getMonth()+1,
      year: date.getFullYear(),
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
