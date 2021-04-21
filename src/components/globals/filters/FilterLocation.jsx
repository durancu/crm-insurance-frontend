import React, { useState } from "react";

//Components
import { Form } from "react-bootstrap";

const FilterLocation = ({ setParams, params }) => {
  const [location, setLocation] = useState(params.location);

  const handleLocationDropdownChange =  ({ target }) => {
    setLocation(target.value);
    setParams({...params, location: target.value });
  };

  return (
    <Form inline>
      <Form.Row>
        <Form.Label htmlFor="location" className="my-1 mr-2">
          Location:
        </Form.Label>
        <Form.Control
          name="location"
          as="select"
          onChange={handleLocationDropdownChange}
          value={location}
          className="my-2 mr-sm-2"
          custom
        >
          <option value="MEXICO-I">Merida (MX) Office</option>
          <option value="USA-I">Houston Headquarters</option>
        </Form.Control>

      </Form.Row>
    </Form>
  );
};

export default FilterLocation;
