export const salesCreateValidate = (inputs) => {
  const errors = {};
  !inputs.soldAt && (errors.soldAt = "Sale Date is required");
  !inputs.customer && (errors.customer = "Customer is required");
  !inputs.liabilityInsurer &&
    (errors.liabilityInsurer = "Liability Insurer is required");
  !inputs.liabilityCharge &&
    (errors.liabilityCharge = "Liability Charge Insurer is required");
  !inputs.cargoInsurer &&
    (errors.cargoInsurer = "Motor Cargo Insurer is required");
  !inputs.cargoCharge &&
    (errors.cargoCharge = "Motor Cargo Charge is required");
  !inputs.physicalDamageInsurer &&
    (errors.physicalDamageInsurer = "Physical Damage Insurer is required");
  !inputs.physicalDamageCharge &&
    (errors.physicalDamageCharge = "Physical Damage Charge is required");
  !inputs.wcGlUmbInsurer &&
    (errors.wcGlUmbInsurer = "WC/GL/UMB Insurer is required");
  !inputs.wcGlUmbCharge &&
    (errors.wcGlUmbCharge = "WC/GL/UMB Charge is required");
  !inputs.downPayment && (errors.downPayment = "Down Payment is required");
  !inputs.fees && (errors.fees = "Fees is required");
  !inputs.permits && (errors.permits = "Permits is required");
  !inputs.tips && (errors.tips = "Tips is required");
  !inputs.chargesPaid && (errors.chargesPaid = "Charges Paid is required");

  return errors;
};
