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

  const uniq = insurers.filter((valor, index) => {
    return insurers.indexOf(valor) === index;
  }).join(' / ');

  console.log("Insurance: "+uniq);

  /* let n = 1;
  uniq.map(
    (x) =>
      x !== "undefined" &&
      insurers_simp.push(`${x} ${uniq.length !== ++n ? "/ " : ""}`)
  ); */

  return uniq;
};

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
