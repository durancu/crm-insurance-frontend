import React from 'react'
import '../components.css'

export default function Customers({ customers }) {
  return (
    <select className="combo-box" name="customers">
      {
        customers.map((customer) => (
          <option key={customer.id} value={customer._id}>{customer.first_name}</option>
        ))
      }
    </select>
  )
}
