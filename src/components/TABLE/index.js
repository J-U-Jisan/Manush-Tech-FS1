import React, { useState } from 'react'
import './table.css'
export default function Table(props) {

  const { title, heading, data } = props.tableData

  const [searchText, setSearchText] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const tableHeading = []
  const rows = []

  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearchText(e.target.value)
  }


  heading.map((item, index) => {
    tableHeading.push(<th key={index}> {item} </th>)
  })

  data.filter((row) => {
    if (searchText === "") {
      return row;
    }
    else if (row.toString().includes(searchText))
      return row;

  }).map((row, index) => {
    const rowData = []
    row.map((item, index) => {
      rowData.push(<td key={index}>{item}</td>)
    })
    rows.push(<tr key={index}>{rowData}</tr>)
  })


  return (
    <div className='main-div'>
      <div>
        <div className='title'>
          <h3>{title}</h3>
        </div>
        <div className='filter'>
          <input type="text"
           name="search" 
           className="search"
           placeholder="Search" 
           onChange={handleSearch} 
          />
          <input type="text" 
            name="startDate" 
            placeholder="Start Date"
            onFocus={
              (e) => {
                e.currentTarget.type = "date";
                e.currentTarget.focus();
              }
            } 
          />
          <input type="text" 
            name="endDate"
            placeholder='End Date'
            onFocus={
              (e) => {
                e.currentTarget.type = "date";
                e.currentTarget.focus()
              }
            }
          />
          <select>
            <option>Select type</option>
            <option>CASH</option>
            <option>GSP</option>
          </select>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr className='head-bg'>
              {tableHeading}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>
  )
}
