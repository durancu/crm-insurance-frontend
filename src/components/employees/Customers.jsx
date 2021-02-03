import React from 'react'

export default function Customers({ customers }) {
  return (
    <select  name="customers">
      {
        customers.map((customer) => (
          <option key={customer.id} value={customer._id}>{customer.first_name}</option>
        ))
      }
    </select>
  )
}
