//Functions
import {
    dateFormatter,
    insurerNameFormatter,
    priceFormatter,
    sellerFormatter,
    footerPriceFormatter,
    customerFormatter,
} from "../globals/functions";

//Components

import { textFilter, selectFilter } from "react-bootstrap-table2-filter";
import { Type } from "react-bootstrap-table2-editor";


export const salesTableColumns = (isAdmin = false, customers = [], sellers = []) =>
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
            dataField: "seller._id",
            text: "Employee",
            formatter: sellerFormatter,
            headerStyle: () => {
                return { width: "10%" };
            },
            sort: true,
            hidden: !isAdmin,
            align: "left",
            headerAlign: "left",
            footer: (columnData) =>
                `${columnData.reduce((acc, item) => acc + 1, 0)} records count`,
            filter: selectFilter({ 
                placeholder: "Search",
                options: sellersOptions(sellers),
            }),
            editable: isAdmin,
            editor: {
                type: Type.SELECT,
                options: sellersOptions(sellers),
            },
        },
        {
            dataField: "seller.location",
            text: "Location",
            headerStyle: () => {
                return { width: "10%" };
            },
            sort: true,
            hidden: !isAdmin,
            align: "left",
            headerAlign: "left",
            footer: "",
            filter: textFilter({ placeholder: "Search" }),
            editable: false, // Not editable, because is a sell
        },
        {
            dataField: "customer._id",
            text: "Customer",
            formatter: customerFormatter,
            headerStyle: () => {
                return { width: "14%" };
            },
            sort: true,
            align: "left",
            headerAlign: "left",
            footer: "",
            filter: selectFilter({ 
                placeholder: "Search",
                options: customersOptions(customers),
            }),
            editable: true,
            editor: {
                type: Type.SELECT,
                options: customersOptions(customers),
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
            dataField: "downPayment",
            text: "Charges",
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

export const customersOptions = (customers) => customers.map((customer) => (
    { value: customer._id, label: customer.name }
))

export const sellersOptions = (sellers) => sellers.map((seller) => (
    { value: seller._id, label: `${seller.firstName} ${seller.lastName}` }
))





export const salesDefaultSorted = () => [{ dataField: "soldAt", order: "desc" }];
