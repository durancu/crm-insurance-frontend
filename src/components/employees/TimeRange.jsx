import React from 'react'
import '../components.css'

export default function TimeRange({options}) {
  return (
    <select className="combo-box" name="timeRange">
      <option value="this-month">This month</option>
    </select>
  )
}
