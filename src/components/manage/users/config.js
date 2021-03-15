//Functions
import {
  componentDeleteFormatter,
  isConfirmFormatter,
  componentPasswordFormatter,
  baseSalaryFormatter,
} from "../../globals/functions";
import { textFilter } from "react-bootstrap-table2-filter";

//Components

export const usersTableColumns = (
  isAdmin = false,
  showModal,
  setId,
  showPasswordModal
) => [
  {
    dataField: "name",
    text: "Full Name",
    align: "left",
    headerAlign: "left",
    sort: true,
    filter: textFilter({ placeholder: "Search" }),
  },
  {
    dataField: "username",
    text: "User Name",
    align: "left",
    headerAlign: "left",
    sort: true,
    filter: textFilter({ placeholder: "Search" }),
    headerStyle: () => {
      return { width: "150px" };
    },
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
    align: "center",
    headerAlign: "center",
    headerStyle: () => {
      return { width: "130px" };
    },
  },
  {
    dataField: "location",
    text: "Location",
    sort: true,
    align: "left",
    headerAlign: "left",
    filter: textFilter({ placeholder: "Search" }),
    headerStyle: () => {
      return { width: "100px" };
    },
  },
  {
    dataField: "position",
    text: "Position",
    sort: true,
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "220px" };
    },
  },
  {
    dataField: "roles",
    text: "Roles",
    sort: true,
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "100px" };
    },
  },
  {
    dataField: "baseSalary",
    text: "Base Salary",
    sort: true,
    align: "right",
    headerAlign: "right",
    formatter: baseSalaryFormatter,
    headerStyle: () => {
      return { width: "130px" };
    },
  },

  {
    dataField: "isSeller",
    text: "Seller",
    sort: true,
    align: "center",
    headerAlign: "center",
    formatter: isConfirmFormatter,
    headerStyle: () => {
      return { width: "64px" };
    },
  },
  {
    dataField: "isAdmin",
    text: "Admin",
    sort: true,
    align: "center",
    headerAlign: "center",
    formatter: isConfirmFormatter,
    headerStyle: () => {
      return { width: "64px" };
    },
  },
  {
    dataField: "",
    text: "",
    headerStyle: () => {
      return { width: "64px" };
    },
    align: "center",
    headerAlign: "center",
    formatter: componentPasswordFormatter,
    events: {
      onClick: (e, column, columnIndex, row, rowIndex) => {
        setId(row._id);
        showPasswordModal();
      },
    },
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

export const usersDefaultSorted = () => [{ dataField: "name", order: "desc" }];

export const userOptions = (sellers) =>
  sellers.map((seller) => ({
    value: seller._id,
    label: `${seller.firstName} ${seller.lastName}`,
  }));
