export const salesCreateValidate = (values) => {
  const errors = {};

  console.log(values);

  !values.soldAt && (errors.soldAt = "Sale Date is required");
  !values.customer && (errors.customer = "Customer is required");

  !values.liabilityInsurer &&
    !values.cargoInsurer &&
    !values.physicalDamageInsurer &&
    !values.wcGlUmbInsurer &&
    (errors.insurers = "Please choose at least one insurance company");

  if (values.liabilityInsurer)
    if (isInvalidNumber(values.liabilityCharge))
      errors.liabilityCharge = "Liability Charge Insurer is required";
    else if (values.liabilityCharge <= 0)
      errors.liabilityCharge = "Value must be greater than 0";

  if (values.cargoInsurer)
    if (isInvalidNumber(values.cargoCharge))
      errors.cargoCharge = "Motor Cargo Insurer is required";
    else if (values.cargoCharge <= 0)
      errors.cargoCharge = "Value must be greater than 0";

  if (values.physicalDamageInsurer)
    if (isInvalidNumber(values.physicalDamageCharge))
      errors.physicalDamageCharge = "Physical Damage Charge is required";
    else if (values.physicalDamageCharge <= 0)
      errors.physicalDamageCharge = "Value must be greater than 0";

  if (values.wcGlUmbInsurer)
    if (isInvalidNumber(values.wcGlUmbCharge))
      errors.wcGlUmbCharge = "WC/GL/UMB Charge is required";
    else if (values.wcGlUmbCharge <= 0)
      errors.wcGlUmbCharge = "Value must be greater than 0";

  if (isInvalidNumber(values.fees)) errors.fees = "Fees is required";
  else if (values.fees < 0) errors.fees = "Value must be greater or equal than 0";

  if (isInvalidNumber(values.permits)) errors.permits = "Permits is required";
  else if (values.permits < 0) errors.permits = "Value must be greater or equal than 0";

  if (isInvalidNumber(values.tips)) errors.tips = "Tips is required";
  else if (values.tips < 0) errors.tips = "Value must be greater or equal than 0";

  if (isInvalidNumber(values.totalCharge))
    errors.totalCharge = "Down payment is required";
  else if (values.totalCharge <= 0)
    errors.totalCharge = "Down payment must be greater than 0";

  if (isInvalidNumber(values.chargesPaid))
    errors.chargesPaid = "Charges is required";
  else if (values.chargesPaid < 0)
    errors.chargesPaid = "Value must be greater or equal than 0";
  else if (values.chargesPaid > values.totalCharge)
    errors.chargesPaid = "Paid amount cannot be greater than Down Payment";

  return errors;
};

export const isInvalidNumber = (number) => (
  number === undefined || isNaN(number)
);