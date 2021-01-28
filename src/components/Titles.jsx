import { type } from 'os'
import React from 'react'

//assets
import "./components.css"



export default function Titles(props:{ title:string }) {
  return (
    <h1 className="heading-title">{props.title}</h1>
  )
}
