//Functions
import {
  commissionFormatter,
} from "../../globals/functions";
import { textFilter } from "react-bootstrap-table2-filter";

//Components

export const insurersTableColumns = (isAdmin = false, showModal, setId) => [
  {
    dataField: "name",
    text: "Full Name",
    align: "left",
    headerAlign: "left",
    sort: true,
    filter: textFilter({ placeholder: "search..." }),
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
    align: "left",
    headerAlign: "left",
    filter: textFilter({ placeholder: "search..." }),
  },
  {
    dataField: "phone",
    text: "Phone",
    sort: true,
    align: "left",
    headerAlign: "left",
    filter: textFilter({ placeholder: "search..." }),
  },
  {
    dataField: "liabilityCommission",
    text: "Liability Commision",
    sort: true,
    align: "center",
    headerAlign: "center",
    formatter: commissionFormatter,
    hidden: !isAdmin
  },
  {
    dataField: "cargoCommission",
    text: "Motor Cargo Commision",
    sort: true,
    align: "center",
    headerAlign: "center",
    formatter: commissionFormatter,
    hidden: !isAdmin
  },
  {
    dataField: "physicalDamageCommission",
    text: "Physical Damage Commision",
    sort: true,
    align: "center",
    headerAlign: "center",
    formatter: commissionFormatter,
    hidden: !isAdmin
  },
  {
    dataField: "wcGlUmbCommission",
    text: "WC/GL/UMB Commision",
    sort: true,
    align: "center",
    headerAlign: "center",
    formatter: commissionFormatter,
    hidden: !isAdmin
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

export const insurersDefaultSorted = () => [
  { dataField: "name", order: "asc" },
];

export const insurerOptions = (sellers) =>
  sellers.map((seller) => ({
    value: seller._id,
    label: `${seller.firstName} ${seller.lastName}`,
  }));
