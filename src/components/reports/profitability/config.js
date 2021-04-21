//Functions
import { textFilter } from "react-bootstrap-table2-filter";
import {
  priceFormatter,
  footerPriceFormatter,
  locationFormatter,
} from "../../globals/functions";

//Components


export const salesReportTableColumns = (isAdmin = false) => [
  {
    dataField: "location",
    text: "Location",
    align: "left",
    headerAlign: "left",
    footer: "TOTALS",
    formatter: locationFormatter,
    filter: textFilter({ placeholder: "search..." }),
  },
  {
    dataField: "sellerName",
    text: "Seller",
    sort: true,
    footer: (columnData) =>
      `${columnData.reduce((acc, item) => acc + 1, 0)} records count`,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "position",
    text: "Position",
    sort: true,
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "10%" };
    },
    footer: "",
  },
  {
    dataField: "premium",
    text: "Total Sales",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
    headerStyle: () => { return { width: "8%" } },
  },
  {
    dataField: "liabilityProfit",
    text: "Liability Profits",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
    headerStyle: () => { return { width: "9%" } },
  },
  {
    dataField: "cargoProfit",
    text: "Cargo Profits",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
    headerStyle: () => { return { width: "8%" } },
  },
  {
    dataField: "physicalDamageProfit",
    text: "Damage Profits",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
    headerStyle: () => { return { width: "8%" } },
  },
  {
    dataField: "wcGlUmbProfit",
    text: "WC/GL/UMB Profits",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
    headerStyle: () => { return { width: "8%" } },
  },
  {
    dataField: "totalSalary",
    text: "Salary Expenses",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
    headerStyle: () => { return { width: "8%" } },
  },
  {
    dataField: "totalSaleGrossProfit",
    text: "Sales Gross",
    headerAlign: "right",
    //formatter: totalGrossProfitFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    //footerFormatter: footerTotalGrossProfitFormatter,
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    dataField: "totalSaleNetProfit",
    text: "Sales Net",
    headerAlign: "right",
    //formatter: totalGrossProfitFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    //footerFormatter: footerTotalGrossProfitFormatter,
    footerAlign: "right",
  },
];

export const salesReportDefaultSorted = () => [
  { dataField: "soldAt", order: "desc" },
];
