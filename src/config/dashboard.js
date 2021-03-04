

export const DASHBOARD_TEMPLATES = {
    SALES_COUNT_BY_DAY_LINE: {
        id: 1,
        model: "sales",
        type: "line",
        title: "Sales By Day",
        width: 6,
        queryParams: {
            dataCriteria: "totalCharge",
            groupingCriteria: "month",
            aggregation: "count"
        }
    },
    TOTAL_SALE_BY_LOCATION_BAR: {
        id: 2,
        model: "sales",
        type: "bar",
        title: "Total Sales Amount By Location",
        width: 6,
        queryParams: {
            dataCriteria: "totalCharge",
            groupingCriteria: "location",
            aggregation: "sum"
        }
    },
    TOTAL_SALE_BY_SELLER_BAR: {
        id: 3,
        model: "sales",
        title: "Total Sales Amount By Seller",
        type: "bar",
        width: 6,
        queryParams: {
            dataCriteria: "totalCharge",
            groupingCriteria: "seller",
            aggregation: "sum"
        },
    },
    TOTAL_PENDING_BY_SELLER_BAR: {
        id: 4,
        model: "sales",
        title: "Total Debt Amount By Seller",
        type: "bar",
        width: 6,
        queryParams: {
            dataCriteria: "amountReceivable",
            groupingCriteria: "seller",
            aggregation: "sum"
        }
    },
    TOTAL_SALE_BY_DAY_BAR: {
        id: 5,
        model: "sales",
        type: "bar",
        width: 6,
        title: "Total Sale By Day",
        queryParams: {
            dataCriteria: "totalCharge",
            groupingCriteria: "day",
            aggregation: "sum"
        }
    },
    TOTAL_SALE_BY_LOCATION_DOUGHNUT: {
        id: 6,
        model: "sales",
        type: "doughnut",
        title: "Total Sales Amount By Location",
        width: 6,
        queryParams: {
            dataCriteria: "totalCharge",
            groupingCriteria: "location",
            aggregation: "sum"
        }
    },


}

export const DASHBOARD_SETS =
{
    "ADMIN": {
        queries: [
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_SELLER_BAR,
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_LOCATION_DOUGHNUT,
            DASHBOARD_TEMPLATES.SALES_COUNT_BY_DAY_LINE,
            DASHBOARD_TEMPLATES.TOTAL_PENDING_BY_SELLER_BAR,
        ],
    },
    "OWNER": {
        queries: [
            DASHBOARD_TEMPLATES.SALES_COUNT_BY_DAY_LINE,
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_LOCATION_BAR,
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_SELLER_BAR,
            DASHBOARD_TEMPLATES.TOTAL_PENDING_BY_SELLER_BAR,
        ],
    },
    "ENDORSEMENTS": {
        queries: [
            DASHBOARD_TEMPLATES.SALES_COUNT_BY_DAY_LINE,
            DASHBOARD_TEMPLATES.TOTAL_PENDING_BY_SELLER_BAR,
        ],
    },
    "CERTIFICATES": {
        queries: [
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_SELLER_BAR,
            DASHBOARD_TEMPLATES.TOTAL_PENDING_BY_SELLER_BAR
        ],
    },
    "TRAINEE": {
        queries: [
            DASHBOARD_TEMPLATES.SALES_COUNT_BY_DAY_LINE,
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_DAY_BAR,
        ],
    },
    "SELLER": {
        queries: [
            DASHBOARD_TEMPLATES.SALES_COUNT_BY_DAY_LINE,
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_DAY_BAR,
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_SELLER_BAR,
            DASHBOARD_TEMPLATES.TOTAL_PENDING_BY_SELLER_BAR,
        ],
    },
    "MANAGER": {
        queries: [
            DASHBOARD_TEMPLATES.SALES_COUNT_BY_DAY_LINE,
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_DAY_BAR,
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_SELLER_BAR,
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_LOCATION_BAR,
        ],
    },
    "LEGAL": {
        queries: [
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_DAY_BAR,
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_SELLER_BAR,
            DASHBOARD_TEMPLATES.TOTAL_SALE_BY_LOCATION_BAR,
            DASHBOARD_TEMPLATES.TOTAL_PENDING_BY_SELLER_BAR,
        ],
    },
}



