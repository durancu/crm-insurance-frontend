import { dataTransform } from "../../globals/functions";

export const salesResponseToSalesListTransformer = (sales) =>
  sales.map((sale) => ({
    ...sale,
    soldAt: new Date(sale.soldAt),
    insurers: dataTransform(sale)
  }));
