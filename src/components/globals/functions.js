import moment from "moment";
import { connect } from "react-redux";
//Actions
import { customerDeleteRequest } from "../../redux/actions";

import { BUSINESS_SETTINGS } from "../../config/company";
import { Person, Building, Trash } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

export const dataTransform = (element) => {
  let insurers = [];

  element.hasOwnProperty("liabilityInsurer") &&
    insurers.push(`${element.liabilityInsurer.name}`);
  element.hasOwnProperty("cargoInsurer") &&
    insurers.push(`${element.cargoInsurer.name}`);
  element.hasOwnProperty("physicalDamageInsurer") &&
    insurers.push(`${element.physicalDamageInsurer.name}`);
  element.hasOwnProperty("wcGlUmbInsurer") &&
    insurers.push(`${element.wcGlUmbInsurer.name}`);

  return insurers
    .filter((valor, index) => {
      return insurers.indexOf(valor) === index;
    })
    .join(" / ");
};

export function priceFormatter(cell, row) {
  if (cell) {
    return <span>{cell}</span>;
  }

  return <span>-</span>;
}

//CUSTOMERS FUNCTIONS
export const companyTypeFormatter = (cell, row) =>
  cell ? (
    <Building size="25" color="light" />
  ) : (
    <Person size="25" color="light" />
  );

export const customerDeleteFormatter = (cell, row) => {
  return (
    <Button size="lg" variant="danger" block>
      <Trash />
    </Button>
  );
};

//---------------------------------------

export function salaryFormatter(cell, row) {
  if (cell) {
    return <span style={{ color: "green", fontWeight: "bold" }}>{cell}</span>;
  }

  return <span>-</span>;
}

export function totalPriceFormatter(cell, row) {
  if (cell) {
    return (
      <span>
        <strong>{cell}</strong>
      </span>
    );
  }

  return <span>-</span>;
}

export function footerPriceFormatter(column, colIndex, { text }) {
  return <strong>{Math.round(Number(text) * 100) / 100}</strong>;
}

export function dateFormatter(cell, row) {
  return <span>{moment(cell).format("L")}</span>;
}

export function fullNameFormatter(cell, row) {
  return (
    <span>
      {row.seller.firstName} {row.seller.lastName}
    </span>
  );
}

<<<<<<< HEAD
export function locationFormatter(cell, row, locationValue) {
  console.log(row, cell, locationValue);
  return (
    <span>
      {
        BUSINESS_SETTINGS.locations.find((location) => location.id === cell)
          .name
      }
=======
export function locationFormatter(cell, row) {
  console.log(row, cell);
  return (
    <span>
       {locationName(row.location)} 
>>>>>>> develop
    </span>
  );
}

export function locationName(locationCode){
  return BUSINESS_SETTINGS.locations.find(location => location.id === locationCode).name
}

export function customerFormatter(cell, row) {
  return row.customer.name;
}

export function sellerFormatter(cell, row) {
  return `${row.seller.firstName} ${row.seller.lastName}`;
}

export function liabilityInsurerFormatter(cell, row) {
  return row.liabilityInsurer ? row.liabilityInsurer.name : "-";
}

export function cargoInsurerFormatter(cell, row) {
  return row.cargoInsurer ? row.cargoInsurer.name : "-";
}

export function physicalDamageInsurerFormatter(cell, row) {
  return row.physicalDamageInsurer ? row.physicalDamageInsurer.name : "-";
}

export function wcGlUmbInsurerFormatter(cell, row) {
  return row.wcGlUmbInsurer ? row.wcGlUmbInsurer.name : "-";
}

export function joinedInsurerNamesFormatter(cell, row) {
  if (row.hasOwnProperty("insurerNames") && row.insurerNames.length) {
    return row.insurerNames.split("/").filter(Boolean).join(" / ");
  }
  return "";
}

export function insurerNameFormatter(cell, row) {
  let insurers = [];

  row.hasOwnProperty("liabilityInsurer") &&
    insurers.push(`${row.liabilityInsurer.name}`);
  row.hasOwnProperty("cargoInsurer") &&
    insurers.push(`${row.cargoInsurer.name}`);
  row.hasOwnProperty("physicalDamageInsurer") &&
    insurers.push(`${row.physicalDamageInsurer.name}`);
  row.hasOwnProperty("wcGlUmbInsurer") &&
    insurers.push(`${row.wcGlUmbInsurer.name}`);

  return insurers
    .filter((valor, index) => {
      return insurers.indexOf(valor) === index;
    })
    .join(" / ");
}

/** Return number
 * @param {number} number
 * @return {number} number
 */
const transformNumber = (number) => (isNaN(number) ? 0 : number);

/**Calc totalCharge
 * @param {object} formData
 * @returns {number} totalCharge
 */
export const totalChargeCalculate = ({
  liabilityCharge,
  cargoCharge,
  physicalDamageCharge,
  wcGlUmbCharge,
  fees,
  permits,
}) =>
  transformNumber(parseFloat(liabilityCharge)) +
  transformNumber(parseFloat(cargoCharge)) +
  transformNumber(parseFloat(physicalDamageCharge)) +
  transformNumber(parseFloat(wcGlUmbCharge)) +
  transformNumber(parseFloat(fees)) +
  transformNumber(parseFloat(permits));

/**Calc pendingPayment
 * @param {object} formData
 * @returns {number} pendingPayment
 */
export const pendingPaymentCalculate = (form) =>
  totalChargeCalculate(form) - transformNumber(parseFloat(form.chargesPaid));
