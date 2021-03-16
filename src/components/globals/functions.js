import moment from "moment";

import { BUSINESS_SETTINGS } from "../../config/company";
import { Person, Building, Trash, Check, Key, Gear } from "react-bootstrap-icons";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { USER_SETTINGS } from "../../config/user";
import { RoleIcons } from "./RoleIcons";

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
    return <span>{preciseNumber(cell,2)}</span>;
  }

  return <span>-</span>;
}


export function preciseNumber(number, precision) {
  if (!Number(number)){
    return '0.00'
  }
  return Number.parseFloat(number).toPrecision(Math.floor(Math.log10(number) + 1) + precision);
}

//CUSTOMERS FUNCTIONS
export const companyTypeFormatter = (cell, row) =>
  cell ? (
    <Building size="25" color="light" />
  ) : (
    <Person size="25" color="light" />
  );

export const componentDeleteFormatter = (cell, row) => {
  return (
    <Button size="sm" variant="danger" block>
      <Trash />
    </Button>
  );
};

//---------------------------------------

//INSURERS FUNCTIONS
export const commissionFormatter = (cell, row) => (
  <span>{cell ? Math.round(cell) + "%" : "-"}</span>
);

//---------------------------------------

//USERS FUNCTIONS
export const isConfirmFormatter = (cell) =>
  cell ? <Check color="royalblue" size={40} /> : <strong>-</strong>;

export const componentPasswordFormatter = (cell, row) => {
  return (
    <Button size="sm" margin="5px" variant="success" block>
      <Key />
    </Button>
  );
};

export function baseSalaryFormatter(cell, row) {
  if (cell) {
    return (
      <span style={{ color: "black", fontWeight: "bold" }}>
        {Math.round(cell * 100) / 100}
      </span>
    );
  }

  return <span>-</span>;
}

export const userRolesFormatter = (cell, row) => {
  const name = USER_SETTINGS.roles.find(({ id }) => id === cell[0]).name;
  const Icon = USER_SETTINGS.roles.find(({ id }) => id === cell[0]).icon

  return (
    <RoleIcons title={name}>
      <Icon size="24px" />
    </RoleIcons>
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
        <strong>{preciseNumber(cell,2)}</strong>
      </span>
    );
  }

  return <span>-</span>;
}

export function footerPriceFormatter(column, colIndex, { text }) {
  return <strong>{preciseNumber(text,2)}</strong>;
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

export function locationFormatter(cell, row) {
  return <span>{locationName(row.location)}</span>;
}

export function locationName(locationCode) {
  return BUSINESS_SETTINGS.locations.find(
    (location) => location.id === locationCode
  ).name;
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

export function buttonHeaderFormatter(cell, row) {
  return { width: "32px" };
}

export function buttonCellFormatter(cell, row) {
  return { padding: "0px", width: "32px" };
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
