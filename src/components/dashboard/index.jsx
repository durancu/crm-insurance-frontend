import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Row, Col } from "react-bootstrap";
import DashboardChart from './sales/DashboardChart';
import { DateRange, dateRangeByName } from '../globals/date-factory';

const mtd = dateRangeByName(DateRange.MONTH_TO_DATE);

const DashboardConfig = {
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

export const Dashboard = () => {

    return (
        <>
            <Row className="mt-3 mb-3">
                <Col sm="6">
                    <h2>Dashboard</h2>
                </Col>
            </Row>
            <Row>
                <Col sm="6" key={DashboardConfig['System Administrator'][0].id}>
                    <DashboardChart chartConfig={DashboardConfig['System Administrator'][0]} />
                </Col>
                <Col sm="6" key={DashboardConfig['System Administrator'][1].id}>
                    <DashboardChart chartConfig={DashboardConfig['System Administrator'][1]} />
                </Col>

            </Row>
        </>
    )
}

Dashboard.propTypes = {
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
