//Functions
import { Type } from "react-bootstrap-table2-editor";
//Components
import { selectFilter, textFilter } from "react-bootstrap-table2-filter";
import {
  buttonCellFormatter,
  buttonHeaderFormatter,
  cargoInsurerFormatter,
  componentDeleteFormatter,
  saleCustomerFormatter,
  dateFormatter,
  footerPriceFormatter,
  liabilityInsurerFormatter,
  locationFormatter,
  physicalDamageInsurerFormatter,
  priceFormatter,
  sellerFormatter,
  totalPriceFormatter,
  wcGlUmbInsurerFormatter,
} from "../globals/functions";

export const salesTableColumns = (
  isAdmin = false,
  setId,
  showModal,
  customers = [],
  sellers = [],
  insurers = []
) => [
  {
    dataField: "soldAt",
    text: "Date",
    formatter: dateFormatter,
    headerStyle: () => {
      return { width: "5%" };
    },
    sort: true,
    footer: (columnData) =>
      `
            ${columnData.reduce((acc, item) => acc + 1, 0)} sales`,
    editor: {
      type: Type.DATE,
    },
  },
  {
    dataField: "seller._id",
    text: "Employee",
    formatter: sellerFormatter,
    headerStyle: () => {
      return { width: "10%" };
    },
    sort: true,
    hidden: true, //!isAdmin,
    align: "left",
    headerAlign: "left",
    footer: "",
    filter: selectFilter({
      placeholder: "Search",
      options: sellersOptions(sellers),
    }),
    editable: isAdmin,
    editor: {
      type: Type.SELECT,
      options: sellersOptions(sellers),
    },
  },
  {
    dataField: "location",
    formatter: locationFormatter,
    text: "Location",
    headerStyle: () => {
      return { width: "10%" };
    },
    sort: true,
    hidden: true, //!isAdmin,
    align: "left",
    headerAlign: "left",
    footer: "",
    filter: textFilter({ placeholder: "Search" }),
    editable: false, // Not editable, because is a sell
  },
  {
    dataField: "customer._id",
    text: "Customer",
    formatter: saleCustomerFormatter,
    headerStyle: () => {
      return { width: "10%" };
    },
    align: "left",
    headerAlign: "left",
    footer: "",
    filter: selectFilter({
      placeholder: "Search",
      options: customersOptions(customers),
    }),
    editable: true,
    editor: {
      type: Type.SELECT,
      options: customersOptions(customers),
    },
  },
  {
    dataField: "liabilityInsurer._id",
    text: "Liability Insurer",
    formatter: liabilityInsurerFormatter,
    headerStyle: () => {
      return { width: "8%" };
    },
    align: "left",
    headerAlign: "left",
    footer: "",
    filter: selectFilter({
      placeholder: "Search",
      options: insurersOptions(insurers),
    }),
    editable: true,
    editor: {
      type: Type.SELECT,
      options: insurersOptions(insurers),
    },
  },
  {
    dataField: "liabilityCharge",
    text: "Charge",
    headerAlign: "right",
    formatter: priceFormatter,
    headerStyle: () => {
      return { width: "5%" };
    },
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    dataField: "cargoInsurer._id",
    text: "Cargo Insurer",
    formatter: cargoInsurerFormatter,
    headerStyle: () => {
      return { width: "8%" };
    },
    align: "left",
    headerAlign: "left",
    footer: "",
    filter: selectFilter({
      placeholder: "Search",
      options: insurersOptions(insurers),
    }),
    editable: true,
    editor: {
      type: Type.SELECT,
      options: insurersOptions(insurers),
    },
  },
  {
    dataField: "cargoCharge",
    text: "Charge",
    headerAlign: "right",
    formatter: priceFormatter,
    headerStyle: () => {
      return { width: "5%" };
    },
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    dataField: "physicalDamageInsurer._id",
    text: "Damage Insurer",
    formatter: physicalDamageInsurerFormatter,
    headerStyle: () => {
      return { width: "8%" };
    },
    align: "left",
    headerAlign: "left",
    footer: "",
    filter: selectFilter({
      placeholder: "Search",
      options: insurersOptions(insurers),
    }),
    editable: true,
    editor: {
      type: Type.SELECT,
      options: insurersOptions(insurers),
    },
  },
  {
    dataField: "physicalDamageCharge",
    text: "Charge",
    headerAlign: "right",
    formatter: priceFormatter,
    headerStyle: () => {
      return { width: "5%" };
    },
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    dataField: "wcGlUmbInsurer._id",
    text: "WCGLUMB Insurer",
    formatter: wcGlUmbInsurerFormatter,
    headerStyle: () => {
      return { width: "9%" };
    },
    align: "left",
    headerAlign: "left",
    footer: "",
    filter: selectFilter({
      placeholder: "Search",
      options: insurersOptions(insurers),
    }),
    editable: true,
    editor: {
      type: Type.SELECT,
      options: insurersOptions(insurers),
    },
  },
  {
    dataField: "wcGlUmbCharge",
    text: "Charge",
    headerAlign: "right",
    formatter: priceFormatter,
    headerStyle: () => {
      return { width: "5%" };
    },
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    dataField: "premium",
    text: "Premium",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    dataField: "fees",
    text: "Fees",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    dataField: "permits",
    text: "Permits",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
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
    dataField: "totalCharge",
    text: "Down Payment",
    headerAlign: "left",
    formatter: totalPriceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
    editable: false,
  },
  {
    dataField: "chargesPaid",
    text: "Paid",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    dataField: "separator-1",
    text: "",
    headerStyle: () => {
      return { margin: "0px", padding: "0px", width: "3px" };
    },
    editable: false,
  },
  {
    dataField: "button-delete",
    text: "",
    editable: false,
    headerStyle: buttonHeaderFormatter,
    style: buttonCellFormatter,
    align: "center",
    headerAlign: "center",
    formatter: componentDeleteFormatter,
    events: {
      onClick: (e, column, columnIndex, row, rowIndex) => {
        setId(row._id);
        showModal();
      },
    },
  },
];

export const customersOptions = (customers) =>
  customers.map((customer) => ({ value: customer._id, label: `${customer.company||customer.name}` }));

export const sellersOptions = (sellers) =>
  sellers.map((seller) => ({
    value: seller._id,
    label: `${seller.firstName} ${seller.lastName}`,
  }));

export const insurersOptions = (insurers) =>
  insurers.map((insurer) => ({ value: insurer._id, label: `${insurer.name}` }));

export const salesDefaultSorted = () => [
  { dataField: "soldAt", order: "desc" },
];
