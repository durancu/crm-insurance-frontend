import moment from "moment";

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
    return <span>{Math.round(cell * 100) / 100}</span>;
  }

  return <span>-</span>;
}

export function footerPriceFormatter(column, colIndex, { text }) {
  return <strong>{Math.round(text * 100) / 100}</strong>;
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

export function customerFormatter(cell, row) {
  return row.customer.name;
}

export function sellerFormatter(cell, row) {
  return `${row.seller.firstName} ${row.seller.lastName}`;
}

export function liabilityInsurerFormatter(cell, row) {
  return row.liabilityInsurer.name;
}

export function cargoInsurerFormatter(cell, row) {
  return row.cargoInsurer.name;
}

export function physicalDamageInsurerFormatter(cell, row) {
  return row.physicalDamageInsurer.name;
}

export function wcGlUmbInsurerFormatter(cell, row) {
  return row.wcGlUmbInsurer.name;
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
  permits
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
