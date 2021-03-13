//Functions
import {
  dateFormatter,
  insurerNameFormatter,
  priceFormatter,
  fullNameFormatter,
  footerPriceFormatter,
  salaryFormatter,
} from "../../globals/functions";

//Components

import { textFilter } from "react-bootstrap-table2-filter";
import { Type } from "react-bootstrap-table2-editor";

export const salesReportTableColumns = (isAdmin = false) => [
  {
    dataField: "location",
    text: "Location",
    align: "left",
    headerAlign: "left",
    footer: "TOTALS",
  },
  {
    dataField: "firstName",
    text: "First Name",
    sort: true,
    footer: (columnData) =>
      `${columnData.reduce((acc, item) => acc + 1, 0)} records count`,
  },
  {
    dataField: "lastName",
    text: "Last Name",
    sort: true,
    align: "left",
    headerAlign: "left",
    footer: "",
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
    dataField: "totalCharge",
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
    text: "Base Salary",
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
    text: "Total Salary",
    headerAlign: "right",
    formatter: salaryFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
];

export const salesReportDefaultSorted = () => [
  { dataField: "soldAt", order: "desc" },
];
