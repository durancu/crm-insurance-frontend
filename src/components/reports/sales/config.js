//Functions
import {
    dateFormatter,
    insurerNameFormatter,
    priceFormatter,
    fullNameFormatter,
    footerPriceFormatter,
} from "../../globals/functions";

//Components

import { textFilter } from "react-bootstrap-table2-filter";
import { Type } from "react-bootstrap-table2-editor";

export const salesReportTableColumns = (isAdmin = false) =>
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
            editor: {
                type: Type.DATE,
            },
        },
        {
            dataField: "seller.firstName",
            text: "Employee",
            formatter: fullNameFormatter,
            headerStyle: () => {
                return { width: "10%" };
            },
            sort: true,
            align: "left",
            headerAlign: "left",
            footer: (columnData) =>
                `${columnData.reduce((acc, item) => acc + 1, 0)} records count`,
            filter: textFilter({ placeholder: "Search" }),
            editable: isAdmin, 
            editor: {
                type: Type.SELECT,
                options: [
                    { value: "Mark", label: "Mark Sailor" },
                    { value: "Mary", label: "Mary Lumber" },
                    { value: "Lis", label: "Lis Clinton" },
                    { value: "Mark", label: "Mark Rock" },
                ],
            },
        },
        {
            dataField: "seller.location",
            text: "Location",
            headerStyle: () => {
                return { width: "10%" };
            },
            sort: true,
            align: "left",
            headerAlign: "left",
            footer: "",
            filter: textFilter({ placeholder: "Search" }),
            editable: false, // No es editable, porque es una property del seller
        },
        {
            dataField: "customer.name",
            text: "Customer",
            headerStyle: () => {
                return { width: "14%" };
            },
            sort: true,
            align: "left",
            headerAlign: "left",
            footer: "",
            filter: textFilter({ placeholder: "Search" }),
            editable: true,
            editor: {
                type: Type.SELECT,
                options: [
                    { value: "Leffler and Sons", label: "Leffler and Sons" },
                    {
                        value: "Harber, Gaylord and Langworth",
                        label: "Harber, Gaylord and Langworth",
                    },
                    { value: "Luis Gusikowski", label: "Luis Gusikowski" },
                    { value: "Kunde LLC", label: "Kunde LLC" },
                ],
            },
        },
        {
            dataField: "liabilityInsurer.name",
            text: "Insurance Company",
            formatter: insurerNameFormatter,
            headerStyle: () => {
                return { width: "28%" };
            },
            align: "left",
            headerAlign: "left",
            footer: "",
            editable: false,
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
        {
            dataField: "chargesPaid",
            text: "Paid",
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
