import { transformNumber } from "../../globals/functions";
import moment from "moment";

export const saleItemToSaleRequestPayloadTransformer = (sale) => {
  const saleValues = {
    soldAt: moment(sale.soldAt).toISOString(),
    customer: sale.customer,
    fees: transformNumber(sale.fees),
    permits: transformNumber(sale.permits),
    premium: transformNumber(sale.premium),
    chargesPaid: transformNumber(sale.chargesPaid),
    tips: transformNumber(sale.tips),
    totalCharge: transformNumber(sale.totalCharge),
  };

  if (sale.liabilityInsurer !== "") {
    saleValues.liabilityInsurer = sale.liabilityInsurer;
    saleValues.liabilityCharge = transformNumber(sale.liabilityCharge, 2);
  } else {
    saleValues.liabilityInsurer = null;
    saleValues.liabilityCharge = null;
  }

  if (sale.cargoInsurer !== "") {
    saleValues.cargoInsurer = sale.cargoInsurer;
    saleValues.cargoCharge = transformNumber(sale.cargoCharge, 2);
  } else {
    saleValues.cargoInsurer = null;
    saleValues.cargoCharge = null;
  }

  if (sale.physicalDamageInsurer !== "") {
    saleValues.physicalDamageInsurer = sale.physicalDamageInsurer;
    saleValues.physicalDamageCharge = transformNumber(
      sale.physicalDamageCharge,
      2
    );
  } else {
    saleValues.physicalDamageInsurer = null;
    saleValues.physicalDamageCharge = null;
  }

  if (sale.wcGlUmbInsurer !== "") {
    saleValues.wcGlUmbInsurer = sale.wcGlUmbInsurer;
    saleValues.wcGlUmbCharge = transformNumber(sale.wcGlUmbCharge, 2);
  } else {
    saleValues.wcGlUmbInsurer = null;
    saleValues.wcGlUmbCharge = null;
  }

  return saleValues;
};
