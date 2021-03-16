//Functions
import {
  buttonCellFormatter,
  buttonHeaderFormatter,
  componentDeleteFormatter,
  companyTypeFormatter,
} from "../../globals/functions";
import { textFilter } from "react-bootstrap-table2-filter";

//Components

export const customersTableColumns = (isAdmin = false, showModal, setId) => [
  {
    dataField: "company",
    text: "Type",
    align: "center",
    headerAlign: "center",
    sort: true,
    formatter: companyTypeFormatter,
  },
  {
    dataField: "name",
    text: "Name",
    align: "left",
    headerAlign: "left",
    sort: true,
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
    align: "left",
    headerAlign: "left",
  },
  {
    dataField: "phone",
    text: "Phone",
    sort: true,
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "100px" };
    },
  },
  {
    dataField: "fax",
    text: "Fax",
    sort: true,
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "100px" };
    },
  },
  {
    dataField: "address",
    text: "Address",
    sort: true,
    align: "left",
    headerAlign: "left",
  },
  {
    dataField: "city",
    text: "City",
    sort: true,
    align: "left",
    headerAlign: "left",
  },
  {
    dataField: "state",
    text: "State",
    sort: true,
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "70px" };
    },
  },
  {
    dataField: "zip",
    text: "Zip",
    sort: true,
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "100px" };
    },
  },
  {
    dataField: "country",
    text: "Country",
    sort: true,
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "100px" };
    },
  },
  {
    dataField: "dot",
    text: "DOT",
    sort: true,
    align: "right",
    headerAlign: "right",
    headerStyle: () => {
      return { width: "100px" };
    },
  },
  {
    dataField: "a",
    text: "",
    headerStyle: () => {
      return { margin: "0px", padding: "0px", width: "3px" };
    },
    editable: false,
  },
  {
    dataField: "b",
    text: "",
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

export const customersDefaultSorted = () => [
  { dataField: "name", order: "desc" },
];

export const customersOptions = (sellers) =>
  sellers.map((seller) => ({
    value: seller._id,
    label: `${seller.firstName} ${seller.lastName}`,
  }));
