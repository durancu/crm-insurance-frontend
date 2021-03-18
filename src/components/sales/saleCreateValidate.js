export const salesCreateValidate = (values) => {
  const errors = {};
  !values.soldAt && (errors.soldAt = "Sale Date is required");
  !values.customer && (errors.customer = "Customer is required");

  !values.liabilityInsurer &&
    !values.cargoInsurer &&
    !values.physicalDamageInsurer &&
    !values.wcGlUmbInsurer &&
    (errors.insurers = "Please choose at least one insurance company");

  if (values.liabilityInsurer)
    if (values.liabilityCharge === undefined)
      errors.liabilityCharge = "Liability Charge Insurer is required";
    else if (isNaN(values.liabilityCharge))
      errors.liabilityCharge = "The value is not correct";

  if (values.cargoInsurer)
    if (values.cargoCharge === undefined)
      errors.cargoCharge = "Motor Cargo Insurer is required";
    else if (isNaN(values.cargoCharge))
      errors.cargoCharge = "The value is not correct";

  if (values.physicalDamageInsurer)
    if (values.physicalDamageCharge === undefined)
      errors.physicalDamageCharge = "Physical Damage Charge is required";
    else if (isNaN(values.physicalDamageCharge))
      errors.physicalDamageCharge = "The value is not correct";

  if (values.wcGlUmbInsurer)
    if (values.wcGlUmbCharge === undefined)
      errors.wcGlUmbCharge = "WC/GL/UMB Charge is required";
    else if (isNaN(values.wcGlUmbCharge))
      errors.wcGlUmbCharge = "The value is not correct";

  if (values.premium === undefined) errors.premium = "Premium is required";
  else if (isNaN(values.premium)) errors.premium = "The value is not correct";

  if (values.fees === undefined) errors.fees = "Fees is required";
  else if (isNaN(values.fees)) errors.fees = "The value is not correct";

  if (values.permits === undefined) errors.permits = "Permits is required";
  else if (isNaN(values.permits)) errors.permits = "The value is not correct";

  if (values.tips === undefined) errors.tips = "Tips is required";
  else if (isNaN(values.tips)) errors.tips = "The value is not correct";

  if (values.chargesPaid === undefined)
    errors.chargesPaid = "Charges is required";
  else if (isNaN(values.chargesPaid))
    errors.chargesPaid = "The value is not correct";

  return errors;
};
