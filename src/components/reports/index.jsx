import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

//Actions
import { reportListRequest } from '../../redux/actions'
//Functions
import dataTransform from './dataTransform'

//Components
import { Table, Spinner } from 'react-bootstrap'


export const Reports = ({ reportListRequest, metrics, loadingReport, errorReport, sales, }) => {

  useEffect(() => {
    reportListRequest()
  }, [reportListRequest])

  return (
    <Fragment>
      <h3>Dashboard</h3>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Insurance Company</th>
            <th>Customer</th>
            <th>Charge</th>
            <th>Fee</th>
            <th>Tip</th>
            <th>Permits</th>
            <th>Pending</th>
            <th>Bonus</th>
          </tr>
        </thead>
        <tbody>
          {loadingReport ? <tr><td colSpan="9" align="center"><Spinner animation="border" variant="primary"/></td></tr> :sales.length > 0 ? sales.map((sale, key) => (
            <tr key={key}>
              <td>{moment(sale.soldAt).format('L')}</td>
              <td>{dataTransform(sale)}</td>
              <td>{sale.customer.name}</td>
              <td>{sale.totalCharge}</td>
              <td>{sale.fees}</td>
              <td>{sale.tips}</td>
              <td>{sale.permits}</td>
              <td>{sale.amountReceivable}</td>
              <td>{sale.sellerBonus}</td>
            </tr>
          )) : <tr><td colSpan="9" align="center"><h4>No registered sales</h4></td></tr>}
        </tbody>
        {
          loadingReport || (metrics.length > 0 && <thead>
            <tr>
              <th>TOTAL</th>
              <th></th>
              <th></th>
              <th>{metrics[0].totalCharge}</th>
              <th>{metrics[0].fees}</th>
              <th>{metrics[0].tips}</th>
              <th>{metrics[0].permits}</th>
              <th>{metrics[0].amountReceivable}</th>
              <th>{metrics[0].sellerBonus}</th>
            </tr>
          </thead>)}
      </Table>
    </Fragment>
  )
}

Reports.propTypes = {
  sales: PropTypes.array.isRequired,
  metrics: PropTypes.array.isRequired,
  loadingReport: PropTypes.bool.isRequired,
  errorReport: PropTypes.bool.isRequired,
  reportListRequest: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  sales: state.reportReducer.list.sales,
  metrics: state.reportReducer.list.metrics,
  loadingReport: state.reportListStatusReducer.loading,
  errorReport: state.reportListStatusReducer.error,
})

const mapDispatchToProps = {
  reportListRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports)
