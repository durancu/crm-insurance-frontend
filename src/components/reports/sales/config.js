//Functions
import {
    dateFormatter,
    priceFormatter,
    footerPriceFormatter,
    joinedInsurerNamesFormatter,
    locationFormatter,
} from "../../globals/functions";

//Components

import { textFilter } from "react-bootstrap-table2-filter";

export const salesReportTableColumns = () =>
    [
        {
            dataField: "soldAt",
            text: "Date",
            formatter: dateFormatter,
            headerStyle: () => {
                return { width: "9%" };
            },
            sort: true,
            footer: "TOTALS",
        },
        {
            dataField: "sellerName",
            text: "Employee",
            headerStyle: () => {
                return { width: "10%" };
            },
            align: "left",
            headerAlign: "left",
            footer: (columnData) =>
                `${columnData.reduce((acc, item) => acc + 1, 0)} records count`,
            filter: textFilter({ placeholder: "Search" }),
        },
        {
            dataField: "locationName",
            text: "Location",
            headerStyle: () => {
                return { width: "10%" };
            },
            sort: true,
            hidden: false,//!isAdmin,
            align: "left",
            headerAlign: "left",
            footer: "",
            filter: textFilter({ placeholder: "Search" }),
        },
        {
            dataField: "customerName",
            text: "Customer",
            headerStyle: () => {
                return { width: "14%" };
            },
            align: "left",
            headerAlign: "left",
            footer: "",
            filter: textFilter({ placeholder: "Search" }),
        },
        {
            dataField: "insurerNames",
            text: "Insurance Providers",
            formatter: joinedInsurerNamesFormatter,
            headerStyle: () => {
                return { width: "18%" };
            },
            align: "left",
            headerAlign: "left",
            footer: "",
            filter: textFilter({ placeholder: "Search" }),
        },
        {
            dataField: "totalCharge",
            text: "Down Payment",
            headerAlign: "right",
            formatter: priceFormatter,
            sort: true,
            align: "right",
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
            footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0),
            footerFormatter: footerPriceFormatter,
            footerAlign: "right",
        },

    ];


export const salesReportDefaultSorted = () => [{ dataField: "soldAt", order: "desc" }];
