//Functions
import { textFilter } from "react-bootstrap-table2-filter";
import { customerCompanyFormatter } from "../../globals/functions";
/* import { textFilter } from "react-bootstrap-table2-filter"; */

//Components

export const customersTableColumns = (isAdmin = false, showModal, setId) => [
  {
    dataField: "company",
    text: "Company Name",
    align: "left",
    headerAlign: "left",
    sort: true,
    filter: textFilter({ placeholder: "search..." }),
    headerStyle: () => {
      return { width: "10%" };
    },
    formatter: customerCompanyFormatter
  },
  {
    dataField: "name",
    text: "Contact Person",
    align: "left",
    headerAlign: "left",
    sort: true,
    filter: textFilter({ placeholder: "search..." }),
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  
  {
    dataField: "dot",
    text: "DOT",
    sort: true,
    align: "right",
    headerAlign: "right",
    filter: textFilter({ placeholder: "search..." }),
    headerStyle: () => {
      return { width: "6%" };
    },
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
    align: "left",
    headerAlign: "left",
    filter: textFilter({ placeholder: "search..." }),
    headerStyle: () => {
      return { width: "15%" };
    },
  },
  {
    dataField: "phone",
    text: "Phone",
    sort: true,
    align: "left",
    headerAlign: "left",
    filter: textFilter({ placeholder: "search..." }),
    headerStyle: () => {
      return { width: "8%" };
    },
  },
  {
    dataField: "fax",
    text: "Fax",
    sort: true,
    align: "left",
    headerAlign: "left",
    filter: textFilter({ placeholder: "search..." }),
    headerStyle: () => {
      return { width: "8%" };
    },
  },
  {
    dataField: "address",
    text: "Address",
    sort: true,
    align: "left",
    headerAlign: "left",
    filter: textFilter({ placeholder: "search..." }),
    headerStyle: () => {
      return { width: "12%" };
    },
  },
  {
    dataField: "city",
    text: "City",
    sort: true,
    align: "left",
    headerAlign: "left",
    filter: textFilter({ placeholder: "search..." }),
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "state",
    text: "State",
    sort: true,
    align: "left",
    headerAlign: "left",
    filter: textFilter({ placeholder: "search..." }),
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "zip",
    text: "Zip",
    sort: true,
    align: "left",
    headerAlign: "left",
    filter: textFilter({ placeholder: "search..." }),
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "country",
    text: "Country",
    sort: true,
    align: "left",
    headerAlign: "left",
    hidden: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "separator-1",
    hidden:true,
    text: "",
    headerStyle: () => {
      return { margin: "0px", padding: "0px", width: "3px" };
    },
    editable: false,
  },
  /* {
    dataField: "button-delete",
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
  }, */
];

export const customersDefaultSorted = () => [
  { dataField: "name", order: "asc" },
];

export const customersOptions = (sellers) =>
  sellers.map((seller) => ({
    value: seller._id,
    label: `${seller.firstName} ${seller.lastName}`,
  }));
