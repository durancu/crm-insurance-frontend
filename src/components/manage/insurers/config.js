//Functions
import {
  buttonCellFormatter,
  buttonHeaderFormatter,
  commissionFormatter,
  componentDeleteFormatter,
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
    filter: textFilter({ placeholder: "Search" }),
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
    dataField: "liabilityCommission",
    text: "Liability",
    sort: true,
    align: "center",
    headerAlign: "center",
    formatter: commissionFormatter,
  },
  {
    dataField: "cargoCommission",
    text: "Motor Cargo",
    sort: true,
    align: "center",
    headerAlign: "center",
    formatter: commissionFormatter,
  },
  {
    dataField: "physicalDamageCommission",
    text: "Physical Damage",
    sort: true,
    align: "center",
    headerAlign: "center",
    formatter: commissionFormatter,
  },
  {
    dataField: "wcGlUmbCommission",
    text: "WC/GL/UMB",
    sort: true,
    align: "center",
    headerAlign: "center",
    formatter: commissionFormatter,
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

export const insurersDefaultSorted = () => [
  { dataField: "name", order: "desc" },
];

export const insurerOptions = (sellers) =>
  sellers.map((seller) => ({
    value: seller._id,
    label: `${seller.firstName} ${seller.lastName}`,
  }));
