import React, { useEffect, useState } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Row, Col } from "react-bootstrap";
import DashboardChart from './sales/DashboardChart';
import { DateRange, dateRangeByName } from '../globals/date-factory';
import { propTypes } from 'react-bootstrap/esm/Image';
import { dashboardGetRequest } from '../../redux/actions';

const mtd = dateRangeByName(DateRange.MONTH_TO_DATE);

const adminDashboardConfig = {
    "System Administrator": [
        {
            id: 1,
            model: "sales",
            chart_type: "bar",
            title: "Sales By Day This Month",
            query_params: {
                data_criteria: "totalCharge",
                grouping_criteria: "day",
                aggregation: "count",
                start_date: mtd.start,
                end_date: mtd.end
            },
        },
        {
            id: 2,
            model: "sales",
            chart_type: "bar",
            title: "Total Sales Amount By Location This Month",
            query_params: {
                data_criteria: "totalCharge",
                grouping_criteria: "location",
                aggregation: "sum",
                start_date: mtd.start,
                end_date: mtd.end,
            }
        },
        {
            id: 3,
            model: "sales",
            title: "Total Sales Amount By Seller This Month",
            chart_type: "bar",
            query_params: {
                data_criteria: "totalCharge",
                grouping_criteria: "seller",
                aggregation: "sum",
                start_date: mtd.start,
                end_date: mtd.end,
            }
        },
        {
            id: 4,
            model: "sales",
            title: "Total Debt Amount By Seller This Month",
            chart_type: "bar",
            query_params: {
                data_criteria: "receivableAmount",
                grouping_criteria: "seller",
                aggregation: "sum",
                start_date: mtd.start,
                end_date: mtd.end,
            }
        }
    ]
}

const charts = [
    {
        "type": "bar",
        "data": {
            "datasets": [
                {
                    "data": [
                        11,
                        12,
                        18,
                        8,
                        7,
                        16,
                        15,
                        12,
                        12,
                        14,
                        18,
                        7,
                        17,
                        15,
                        7,
                        12,
                        12,
                        13,
                        8,
                        12,
                        17,
                        12,
                        10,
                        8,
                        11,
                        11,
                        17,
                        17,
                        17,
                        9,
                        10
                    ]
                }
            ],
            "labels": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31
            ]
        },
        "options": {}
    },
    {
        "type": "bar",
        "data": {
            "datasets": [
                {
                    "data": [
                        641859,
                        1253021
                    ]
                }
            ],
            "labels": [
                "MEXICO",
                "USA"
            ]
        },
        "options": {}
    },
    {
        "type": "bar",
        "data": {
            "datasets": [
                {
                    "data": [
                        134648,
                        103206,
                        152680,
                        134945,
                        159475,
                        108016,
                        120399,
                        96109,
                        109253,
                        100634,
                        92202,
                        102818,
                        168704,
                        168164,
                        118452,
                        25177
                    ]
                }
            ],
            "labels": [
                "Eddy Greed",
                "Eddy Lumber",
                "Eddy Nielsen",
                "Fred Sailor",
                "John Sailor",
                "Lis Clinton",
                "Mark Junior",
                "Mark Rock",
                "Mark Sailor",
                "Mary Clinton",
                "Mary Lumber",
                "Sally Clinton",
                "Sally Greed",
                "Sam Clinton",
                "Sam Rock",
                "System Administrator"
            ]
        },
        "options": {}
    },
    {
        "type": "bar",
        "data": {
            "datasets": [
                {
                    "data": [
                        1191,
                        1168,
                        1788,
                        1331,
                        1570,
                        1195,
                        977,
                        1053,
                        1233,
                        1284,
                        940,
                        989,
                        1633,
                        1627,
                        1327,
                        488
                    ]
                }
            ],
            "labels": [
                "Eddy Greed",
                "Eddy Lumber",
                "Eddy Nielsen",
                "Fred Sailor",
                "John Sailor",
                "Lis Clinton",
                "Mark Junior",
                "Mark Rock",
                "Mark Sailor",
                "Mary Clinton",
                "Mary Lumber",
                "Sally Clinton",
                "Sally Greed",
                "Sam Clinton",
                "Sam Rock",
                "System Administrator"
            ]
        },
        "options": {}
    }
]

export const Dashboard = ({ dashboardGetRequest }) => {

    const [query] = useState(adminDashboardConfig['System Administrator'][0]);
    const [chartDataList] = useState([]);
    const [currentChartData] = useState({});


    useEffect(() => {
        dashboardGetRequest(query);
    }, [dashboardGetRequest, query]);



    return (
        <>
            <Row className="mt-3 mb-3">
                <Col sm="6">
                    <h2>Dashboard</h2>
                </Col>
            </Row>
            <Row>
                {
                    charts.map(chartData => (
                        <Col sm="6">
                            <DashboardChart chartData={chartData} />
                        </Col>
                    ))
                }

            </Row>
        </>
    )
}

Dashboard.propTypes = {
    //dashboardConfig: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    //customers: state.customerReducer.list,
    //chartData: state.dashboardReducer.config,  
    currentChartData: state.dashboardReducer.config,
});

const mapDispatchToProps = {
    dashboardGetRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
