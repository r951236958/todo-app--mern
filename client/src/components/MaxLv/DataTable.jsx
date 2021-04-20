import React from 'react'

const DataTable = ({obj}) => {
  
  return (
    <>
      <tr>
        <td>{obj._id}</td>
        <td>{obj.lv}</td>
        <td>{obj.four}</td>
        <td>{obj.five}</td>
      </tr>
    </>
  )
}

export default DataTable
