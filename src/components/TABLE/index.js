import React, { useState } from 'react'
import './table.css'
export default function Table(props) {

  const { title, heading, data } = props.tableData

  const initialFilter = {
    searchText: '',
    startDate: '',
    endDate: '',
    type: ''
  }

  const [filter, setFilter] = useState(initialFilter)
  
  const tableHeading = []
  let filteredData = []

  function parseDate(input) {

    let parts = input.split('-');
    return Date.parse(parts[0] + '-' + Number(parts[1]) + '-' + parts[2]); // Note: months are 0-based
  }

  const handleFilter = (e) => {
    const {name, value} = e.target
    setFilter( (data) => ({
      ...data,
      [name] : value
    }))
  }

  const resetFilter = () => {
    setFilter(initialFilter)
    console.log(filter)
  }

  heading.map((item, index) => {
    tableHeading.push(<th key={index}> {item} </th>)
  })

  filteredData = data.filter((row) => {
    if (filter.searchText === "") {
      return row;
    }
    else if (row.toString().includes(filter.searchText))
      return row;
    else return false

  })
  // console.log('Search', filteredData)

  
  filteredData = filteredData.filter((row) => {
    if (filter.startDate === "" && filter.endDate === "")
      return row;
    else if( filter.startDate === "" && (parseDate(filter.endDate) >= Date.parse(row[1])))
      return row;
    else if( filter.endDate === "" && (parseDate(filter.startDate) <= Date.parse(row[1])))
      return row;
    else if((parseDate(filter.endDate) >= Date.parse(row[1])) && (parseDate(filter.startDate) <= Date.parse(row[1])))
      return row;
    else return false
  })

  // console.log('Date', filteredData)

  filteredData = filteredData.filter((row) => {
    if(filter.type === "")
      return row;
    else if(row[4] === filter.type)
      return row;
    else return false
  })

  // console.log('type', filteredData)

  const totalRecords = filteredData.length
  const initialPageFilter = {
    numberOfRecordsPerPage: 5,
    numberOfPages: Math.ceil(totalRecords/5)
  }
  const [pageFilter, setPageFilter] = useState(initialPageFilter)
  const [currentPage, setCurrentPage] = useState(1)

  const handleNumberOfRecordsPerPage = (e) => {
    setPageFilter({
      'numberOfRecordsPerPage' : e.target.value,
      'numberOfPages' : Math.ceil(totalRecords / e.target.value)
    })
    setCurrentPage(1)
  }
  
  const handleGoToPage = (e) => {
    const val = e.target.value
    if(val<1) return false
    else if(val>pageFilter.numberOfPages)
      return false
    setCurrentPage(val)
  }

  const handlePreviousPage = () => {
    setCurrentPage(Number(currentPage) - 1)
  }

  const handleNextPage = () => {
    setCurrentPage(Number(currentPage) + 1)
  }

  const firstIndex = (currentPage-1) * pageFilter.numberOfRecordsPerPage
  const lastIndex = Math.min(firstIndex + pageFilter.numberOfRecordsPerPage, totalRecords)
  const rows= []
  for(let x=firstIndex; x<lastIndex; x++){
    const rowData = []
    
    filteredData[x].map((item, index) => {
      rowData.push(<td key={index}>{item}</td>)
    })
    rows.push(<tr key={x}>{rowData}</tr>)
  }
  
  return (
    <div className='main-div'>
      <div>
        <div className='title'>
          <h3>{title}</h3>
        </div>
        <div className='filter'>
          <input type="text"
           name="searchText" 
           value={filter.searchText}
           className="search"
           placeholder="Search" 
           onChange={handleFilter} 
          />
          <input type="text" 
            name="startDate" 
            placeholder="Start Date"
            onFocus={
              (e)=> {
                e.currentTarget.type = "date";
                e.currentTarget.focus();
               }
            }
            onBlur={
              (e)=> {
                e.currentTarget.type = "text";
                e.currentTarget.blur();
               }
            }
            value={filter.startDate}
            onChange={handleFilter}
          />
          <input type="text" 
            name="endDate"
            placeholder='End Date'
            onFocus={
              (e)=> {
                e.currentTarget.type = "date";
                e.currentTarget.focus();
               }
             }
             onBlur={
              (e)=> {
                e.currentTarget.type = "text";
                e.currentTarget.blur();
               }
            }
            value={filter.endDate}
            onChange={handleFilter}
          />
          <select className='type' name="type" onChange={handleFilter}>
            <option value="">Select type</option>
            <option value="CASH">CASH</option>
            <option value="GSP">GSP</option>
          </select>
          <button className='refreshButton' onClick={resetFilter} >&#x27f3;</button>
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
      <div className='mt-1'>
        <div className='page-number-section'>
          <p className='text-left'>Page <span className='bold'>{currentPage} of {pageFilter.numberOfPages}</span></p>
        </div>
        <div className='page-filter-section text-right'>
          <button onClick={handlePreviousPage} disabled={currentPage === 1 ? true : false }>&#60;</button>
          <button onClick={handleNextPage} disabled={ currentPage === pageFilter.numberOfPages ? true : false } >&#62;</button>
          <label htmlFor="page-number">Go to page:</label>
          <input type="number" id="page-number" value={ Number(currentPage) } onChange={handleGoToPage} name="pageNumber"  />
          <select name="numberOfRecordsPerPage" value={pageFilter.numberOfRecordsPerPage} className='number-of-record' onChange={handleNumberOfRecordsPerPage}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  )
}
