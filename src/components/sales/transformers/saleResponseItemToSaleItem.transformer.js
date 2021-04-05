import { preciseNumber } from "../../globals/functions";

export const saleResponseItemToSaleItemTransformer = (sale) => ({
  ...sale,
  soldAt: new Date(sale.soldAt),
  liabilityCharge: preciseNumber(sale.liabilityCharge, 2),
  cargoCharge: preciseNumber(sale.cargoCharge, 2),
  physicalDamageCharge: preciseNumber(sale.physicalDamageCharge, 2),
  wcGlUmbCharge: preciseNumber(sale.wcGlUmbCharge, 2),
  fees: preciseNumber(sale.fees, 2),
  permits: preciseNumber(sale.permits, 2),
  premium: preciseNumber(sale.premium, 2),
  chargesPaid: preciseNumber(sale.chargesPaid, 2),
  tips: preciseNumber(sale.tips, 2),
  totalCharge: preciseNumber(sale.totalCharge, 2),
});
