export const salesCreateValidate = (inputs) => {
  const errors = {};
  !inputs.soldAt && (errors.soldAt = "Sale Date is required");
  !inputs.customer && (errors.customer = "Customer is required");

  !inputs.liabilityInsurer &&
    !inputs.cargoInsurer &&
    !inputs.physicalDamageInsurer &&
    !inputs.wcGlUmbInsurer &&
    (errors.insurers = "Choice one at least Insurer");

  inputs.liabilityInsurer &&
    !inputs.liabilityCharge &&
    (errors.liabilityCharge = "Liability Charge Insurer is required");
  inputs.cargoInsurer &&
    !inputs.cargoCharge &&
    (errors.cargoCharge = "Motor Cargo Charge is required");
  inputs.physicalDamageInsurer &&
    !inputs.physicalDamageCharge &&
    (errors.physicalDamageCharge = "Physical Damage Charge is required");
  inputs.wcGlUmbInsurer &&
    !inputs.wcGlUmbCharge &&
    (errors.wcGlUmbCharge = "WC/GL/UMB Charge is required");

  !inputs.downPayment && (errors.downPayment = "Down Payment is required");
  !inputs.fees && (errors.fees = "Fees is required");
  !inputs.permits && (errors.permits = "Permits is required");
  !inputs.tips && (errors.tips = "Tips is required");
  !inputs.chargesPaid && (errors.chargesPaid = "Charges Paid is required");

  return errors;
};
