//Functions
import {
  componentDeleteFormatter,
  isConfirmFormatter,
  componentPasswordFormatter,
  baseSalaryFormatter,
  buttonCellFormatter,
  buttonHeaderFormatter,
  locationFormatter,
  userRolesFormatter,
  priceFormatter,
} from "../../globals/functions";
import { textFilter } from "react-bootstrap-table2-filter";
import { Type } from "react-bootstrap-table2-editor";
import { USER_SETTINGS } from "../../../config/user";

//Components

export const usersTableColumns = (
  isAdmin = false,
  showModal,
  setId,
  showPasswordModal
) => [
  {
    dataField: "username",
    text: "User Name",
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "8%" };
    },
    sort: true,
    filter: textFilter({ placeholder: "Search" }),
    headerStyle: () => {
      return { width: "150px" };
    },
  },
  {
    dataField: "firstName",
    text: "First Name",
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "9%" };
    },
    sort: true,
    filter: textFilter({ placeholder: "Search" }),
  },
  {
    dataField: "lastName",
    text: "Last Name",
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "9%" };
    },
    sort: true,
    filter: textFilter({ placeholder: "Search" }),
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
    align: "left",
    headerAlign: "left",
    headerStyle: () => {
      return { width: "12%" };
    },
  },
  {
    dataField: "phone",
    text: "Phone",
    sort: true,
    align: "center",
    headerAlign: "center",
    headerStyle: () => {
      return { width: "6%" };
    },
  },
  {
    dataField: "location",
    text: "Location",
    sort: true,
    align: "left",
    headerAlign: "left",
    formatter: locationFormatter,
    filter: textFilter({ placeholder: "Search" }),
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
  },
  {
    dataField: "roles",
    text: "Role",
    align: "center",
    headerAlign: "center",
    formatter: userRolesFormatter,
    headerStyle: () => {
      return { width: "10%" };
    },
    editor: {
      type: Type.SELECT,
      options: rolesOptions(),
    },
  },
  {
    dataField: "baseSalary",
    text: "Base Salary",
    sort: true,
    align: "right",
    headerAlign: "left",
    formatter: priceFormatter,
    headerStyle: () => {
      return { width: "4%" };
    },
  },
  {
    dataField: "",
    text: "",
    headerStyle: () => {
      return { width: "20px" };
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
      return { margin: "0px", padding: "0px", width: "2px" };
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

export const usersDefaultSorted = () => [{ dataField: "name", order: "desc" }];

export const userOptions = (sellers) =>
  sellers.map((seller) => ({
    value: seller._id,
    label: `${seller.firstName} ${seller.lastName}`,
  }));

export const rolesOptions = () =>
  USER_SETTINGS.roles.map(({ id, name }) => ({ value: id, label: name }));
