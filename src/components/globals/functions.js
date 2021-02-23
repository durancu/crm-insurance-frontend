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
    return (
      <span>
        {Math.round(cell * 100) / 100}
      </span>
    );
  }

  return (
    <span>-</span>
  );
}

export function footerPriceFormatter(column, colIndex, { text }) {
  return (
    <strong>{Math.round(text * 100) / 100}</strong>
  );
}

export function dateFormatter(cell, row) {  
  return (
    <span>{moment(cell).format("L")}</span>
  );
}

export function fullNameFormatter(cell, row) {  
  return (
    <span>{row.seller.firstName} {row.seller.lastName}</span>
  );
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
export const totalChargeFunction = ({
  liabilityCharge,
  cargoCharge,
  physicalDamageCharge,
  wcGlUmbCharge,
  fees,
  permits,
  tips,
}) =>
  transformNumber(parseFloat(liabilityCharge)) +
  transformNumber(parseFloat(cargoCharge)) +
  transformNumber(parseFloat(physicalDamageCharge)) +
  transformNumber(parseFloat(wcGlUmbCharge)) +
  transformNumber(parseFloat(fees)) +
  transformNumber(parseFloat(permits)) +
  transformNumber(parseFloat(tips));

/**Calc pendingPayment
 * @param {object} formData
 * @returns {number} pendingPayment
 */
export const pendingPaymentFunction = (form) =>
  totalChargeFunction(form) - transformNumber(parseFloat(form.chargesPaid));

/**Calc bonus
 * @param {object} formData
 * @returns {number} bonus
 */
export const bonusFunction = ({
  liabilityCharge,
  cargoCharge,
  physicalDamageCharge,
  wcGlUmbCharge,
  fees,
  permits,
  tips,
}) =>
  (transformNumber(parseFloat(liabilityCharge)) +
    transformNumber(parseFloat(cargoCharge)) +
    transformNumber(parseFloat(physicalDamageCharge)) +
    transformNumber(parseFloat(wcGlUmbCharge))) *
    0.01 +
  transformNumber(parseFloat(fees)) * 0.3 +
  transformNumber(parseFloat(permits)) * 0.2 +
  transformNumber(parseFloat(tips));
