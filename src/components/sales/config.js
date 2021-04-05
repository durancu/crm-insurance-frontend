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
  componentEditFormatter,
  insurerNameFormatter,
} from "../globals/functions";

/**salesTableColumns
 * @param {string} setId
 * @param {Function} showModal 
 * @param {Function} showEdit
 * @param {boolean} isAdmin
 * @param {boolean} isExecutive
 * @param {Array} customers
 * @param {Array} sellers
 * @param {Array} insurers
 * @returns {Array} Objects Array
 */
export const salesTableColumns = (
  setId,
  showModal = Function,
  showEdit = Function,
  isAdmin = false,
  isExecutive = false,
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
    editable: true,
    footer: (columnData) =>
      `${columnData.reduce((acc, item) => acc + 1, 0)} sales`,
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
    hidden: !isAdmin && !isExecutive,
    align: "left",
    headerAlign: "left",
    footer: "",
    filter: selectFilter({
      placeholder: "search...",
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
    filter: textFilter({ placeholder: "search..." }),
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
      placeholder: "search...",
      options: customersOptions(customers),
    }),
    editable: true,
    editor: {
      type: Type.SELECT,
      options: customersOptions(customers),
    },
  },
  {
    dataField: "insurers",
    text: "Insurers",
    formatter: insurerNameFormatter,
    headerStyle: () => {
      return { width: "8%" };
    },
    align: "left",
    headerAlign: "left",
    footer: "",
    filter: textFilter({ placeholder: "search..." }),
    /* filter: selectFilter({
      placeholder: "search...",
      options: insurersOptions(insurers),
    }), */
    editable: false,
    editor: {
      type: Type.SELECT,
      options: insurersOptions(insurers),
    },
  },
  {
    hidden:true,
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
      placeholder: "search...",
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
    text: "Liability",
    headerAlign: "right",
    formatter: priceFormatter,
    headerStyle: () => {
      return { width: "7%" };
    },
    sort: true,
    align: "right",
    editable: true,
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    hidden:true,
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
      placeholder: "search...",
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
    text: "Cargo",
    headerAlign: "right",
    formatter: priceFormatter,
    headerStyle: () => {
      return { width: "7%" };
    },
    sort: true,
    align: "right",
    editable: true,
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    hidden:true,
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
      placeholder: "search...",
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
    text: "Damage",
    headerAlign: "right",
    formatter: priceFormatter,
    headerStyle: () => {
      return { width: "8%" };
    },
    sort: true,
    align: "right",
    editable: true,
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
  },
  {
    hidden:true,
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
      placeholder: "search...",
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
    text: "WCGLUMB",
    headerAlign: "right",
    formatter: priceFormatter,
    headerStyle: () => {
      return { width: "7%" };
    },
    sort: true,
    align: "right",
    editable: true,
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
    editable: false,
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
    editable: true,
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
    editable: true,
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
    editable: true,
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
    editable: true,
  },
  {
    hidden:true,
    dataField: "chargesPaid",
    text: "Paid",
    headerAlign: "right",
    formatter: priceFormatter,
    sort: true,
    align: "right",
    footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: "right",
    editable: true,
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
    dataField: "button-edit",
    text: "",
    editable: false,
    headerStyle: buttonHeaderFormatter,
    style: buttonCellFormatter,
    align: "center",
    headerAlign: "center",
    formatter: componentEditFormatter,
    events: {
      onClick: (e, column, columnIndex, row, rowIndex) => {
        setId(row._id);
        showEdit();
      },
    },
  },
  {
    dataField: "separator-2",
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
  customers.map((customer) => ({
    value: customer._id,
    label: `${customer.company || customer.name}`,
  }));

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
