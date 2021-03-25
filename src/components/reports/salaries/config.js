//Functions
import {
  priceFormatter,
  footerPriceFormatter,
  locationFormatter,
} from "../../globals/functions";

//Components

export const payrollReportTableColumns = (isAdmin = false) => [
  {
    dataField: "location",
    text: "Location",
    formatter: locationFormatter,
    align: "left",
    headerAlign: "left",
    footer: "TOTALS",
  },
  {
    dataField: "sellerName",
    text: "Seller",
    sort: true,
    footer: (columnData) =>
      `${columnData.reduce((acc, item) => acc + 1, 0)} records count`,
  },
  {
    dataField: "position",
    text: "Position",
    sort: true,
    align: "left",
    headerAlign: "left",
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
  },
  {
    dataField: "baseSalary",
    text: "Base",
    sort: true,
    align: "right",
    headerAlign: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    dataField: "tips",
    text: "Tips",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    dataField: "bonus",
    text: "Bonus",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    dataField: "total",
    text: "Salary",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
];

export const payrollReportDefaultSorted = () => [
  { dataField: "soldAt", order: "desc" },
];
