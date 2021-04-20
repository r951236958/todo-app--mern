import React from 'react'

const DataTable = ({obj}) => {
  
  return (
    <>
      <tr>
        <td>{obj._id}</td>
        <td>{obj.name}</td>
        <td>{obj.email}</td>
      </tr>
    </>
  )
}

export default DataTable
