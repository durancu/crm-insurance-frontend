import React from 'react'
import {Table} from 'react-bootstrap'

export default function Sales({sales}) {
  return (
    <Table striped bordered hover>
      <thead>
        <th>Date</th>
        <th>Insurance Company</th>
        <th>Customer</th>
        <th>Sale Total</th>
        <th>Fee</th>
        <th>Tip</th>
        <th>Permits</th>
        <th>Pending</th>
        <th>Bonus</th>
      </thead>
      <tbody>
        {
          sales.map(sale=>(
            <tr>
              <td>{sale.date}</td>
              <td>{sale.insurance_company}</td>
              <td>{sale.customer}</td>
              <td>{sale.sales}</td>
              <td>{sale.fee}</td>
              <td>{sale.tip}</td>
              <td>{sale.permits}</td>
              <td>{sale.pending}</td>
              <td>{sale.bonus}</td>
            </tr>
          ))
        }
      </tbody>
      <thead>
        <th colSpan="3">Total</th>
        <th>91713</th>
        <th>525</th>
        <th>300</th>
        <th>10000</th>
        <th>0</th>
        <th>2120.4</th>
      </thead>
    </Table>
  )
}
