//Functions
import {
  locationFormatter,
  userRolesFormatter,
  priceFormatter,
  buttonHeaderFormatter,
  buttonCellFormatter,
  componentPasswordFormatter,
  rowIsNotAdmin,
} from "../../globals/functions";
import { textFilter } from "react-bootstrap-table2-filter";
import { Type } from "react-bootstrap-table2-editor";
import { USER_SETTINGS } from "../../../config/user";

//Components

export const usersTableColumns = (
  isAdmin = false,
  isExecutive = false,
  showModal,
  setId,
  showPasswordModal
) => [
    {
      dataField: "location",
      text: "Location",
      sort: true,
      align: "left",
      headerAlign: "left",
      formatter: locationFormatter,
      filter: textFilter({ placeholder: "search..." }),
      headerStyle: () => {
        return { width: "12%" };
      },
      editable: false,
    },
    {
      dataField: "username",
      text: "Username",
      align: "left",
      headerAlign: "left",
      sort: true,
      filter: textFilter({ placeholder: "search..." }),
      headerStyle: () => {
        return { width: "10%" };
      },
      hidden: !isAdmin && !isExecutive,
      editable: (isAdmin || isExecutive) && rowIsNotAdmin,
    },
    {
      dataField: "firstName",
      text: "First Name",
      align: "left",
      headerAlign: "left",
      headerStyle: () => {
        return { width: "10%" };
      },
      sort: true,
      filter: textFilter({ placeholder: "search..." }),
      editable: (isAdmin || isExecutive) && rowIsNotAdmin,
    },
    {
      dataField: "lastName",
      text: "Last Name",
      align: "left",
      headerAlign: "left",
      headerStyle: () => {
        return { width: "10%" };
      },
      sort: true,
      filter: textFilter({ placeholder: "search..." }),
      editable: (isAdmin || isExecutive) && rowIsNotAdmin,
    },
    {
      dataField: "roles[0]",
      text: "Role",
      align: "left",
      headerAlign: "left",
      sort: true,
      formatter: userRolesFormatter,
      //filter: textFilter({ placeholder: "search..." }),
      headerStyle: () => {
        return { width: "12%" };
      },
      editor: {
        type: Type.SELECT,
        options: rolesOptions(),
      },
      hidden: !isAdmin && !isExecutive,
      editable: (isAdmin || isExecutive) && rowIsNotAdmin,
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
      editable: (isAdmin || isExecutive) && rowIsNotAdmin,
    },
    {
      dataField: "phone",
      text: "Phone",
      sort: true,
      align: "center",
      headerAlign: "center",
      filter: textFilter({ placeholder: "search..." }),
      headerStyle: () => {
        return { width: "10%" };
      },
      editable: (isAdmin || isExecutive) && rowIsNotAdmin,
    },
    {
      dataField: "position",
      text: "Position",
      sort: true,
      align: "left",
      headerAlign: "left",
      filter: textFilter({ placeholder: "search..." }),
      headerStyle: () => {
        return { width: "10%" };
      },
      editable: (isAdmin || isExecutive) && rowIsNotAdmin,
    },

    {
      dataField: "baseSalary",
      text: "Base Salary",
      sort: true,
      align: "right",
      headerAlign: "right",
      formatter: priceFormatter,

      hidden: !isAdmin && !isExecutive,
      editable: (isAdmin || isExecutive) && rowIsNotAdmin,
    },
    {
      dataField: "",
      text: "",
      headerStyle: () => {
        return { width: "20px" };
      },
      editable: false,
      hidden: !isAdmin && !isExecutive,
    },

    {
      dataField: "button-password",
      text: "",
      headerStyle: buttonHeaderFormatter,
      style: buttonCellFormatter,
      align: "right",
      headerAlign: "right",
      formatter: componentPasswordFormatter,
      events: ((isAdmin || isExecutive) && rowIsNotAdmin) ? {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          setId(row._id);
          showPasswordModal();
        },
      } : {},
      hidden: !isAdmin && !isExecutive,
      editable: false,
    },
    /* {
      dataField: "separator",
      text: "",
      headerStyle: () => {
        return { margin: "0px", padding: "0px", width: "2px" };
      },
      editable: false,
    }, */
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

export const usersDefaultSorted = () => [{ dataField: "name", order: "asc" }];

export const userOptions = (sellers) =>
  sellers.map((seller) => ({
    value: seller._id,
    label: `${seller.firstName} ${seller.lastName}`,
  }));

export const rolesOptions = (roles) =>
  USER_SETTINGS.roles.filter(({ id }) => (id !== "ADMIN" && id !== "OWNER")).map(({ id, name }) => ({ value: id, label: name }));
