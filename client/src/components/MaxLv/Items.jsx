import React, { useEffect, useState } from 'react'

import axios from 'axios'
import DataTable from './DataTable'

const Items = () => {
  const [usersCollection, setUsersCollection] = useState([])

  useEffect(() => {
    setAllUsers()
  }, [])

  const setAllUsers = () => {
    axios
      .get('/api/lv')
      .then((res) => {
        const usersCollection = res.data
        setUsersCollection(usersCollection)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const dataTable = usersCollection.map((data, i) => (
    <DataTable obj={data} key={i} />
  ))

  return (
    <>
      <div className="wrapper-users">
        <div className="container">
          <table className="table table-striped table-dark">
            <thead className="thead-dark">
              <tr>
                <td>Id</td>
                <td>Lv</td>
                <td>4冠数量</td>
                <td>5冠数量</td>
              </tr>
            </thead>
            <tbody>{dataTable}</tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Items
