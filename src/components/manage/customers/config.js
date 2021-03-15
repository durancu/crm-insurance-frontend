//Functions
import {
  companyTypeFormatter,
  componentDeleteFormatter,
} from "../../globals/functions";
import { textFilter } from "react-bootstrap-table2-filter";

//Components

export const customersTableColumns = (isAdmin = false, showModal, setId) => [
  {
    dataField: "name",
    text: "Full Name",
    align: "left",
    headerAlign: "left",
    sort: true,
    filter: textFilter({ placeholder: "Search" }),
  },
  {
    dataField: "isCompany",
    text: "Type",
    sort: true,
    formatter: companyTypeFormatter,
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
  },
  {
    dataField: "",
    text: "",
    headerStyle: () => {
      return { width: "64px" };
    },
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
