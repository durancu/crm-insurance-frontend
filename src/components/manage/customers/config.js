//Functions
import {
  buttonCellFormatter,
  buttonHeaderFormatter,
  companyTypeFormatter,
  componentDeleteFormatter,
} from "../../globals/functions";
import { textFilter } from "react-bootstrap-table2-filter";

//Components

export const customersTableColumns = (isAdmin = false, showModal, setId) => [
  {
    dataField: "name",
    text: "Name",
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "25%" };
    },
    sort: true,
    filter: textFilter({ placeholder: "Search" }),
  },
  {
    dataField: "isCompany",
    text: "Type",
    sort: true,
    headerStyle: () => {
      return { width: "80px" };
    },
    formatter: companyTypeFormatter,
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "25%" };
    },
  },
  {
    dataField: "phone",
    text: "Phone",
    sort: true,
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "30%" };
    },
  },
  {
    dataField: "",
    text: "",
    headerStyle: () => {
      return { margin:"0px", padding:"0px", width: "3px" };
    },
    editable: false,
  },
  {
    dataField: "",
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
