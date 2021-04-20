import React, { useState, useEffect } from 'react'

import EmployeeService from '../services/EmployeeService'

const ListUser = (props) => {
  const [employees, setEmployees] = useState([])

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) => {
      setEmployees({
        employees: employees.filter((employee) => employee.id !== id),
      })
    })
  }

  const viewEmployee = (id) => {
    props.history.push(`/view-employee/${id}`)
  }
  
  const editEmployee = (id) => {
    props.history.push(`/add-employee/${id}`)
  }

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees({ employees: res.data })
    })
  }, [])

  const addEmployee = () => {
    props.history.push(`/add-employee/_add`)
  }

  return (
    <>
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={addEmployee}>
            {' '}
            Add Employee
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Employee First Name</th>
                <th> Employee Last Name</th>
                <th> Employee Email Id</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((items, i) => (
                <tr key={i}>
                  <td> {items.firstName} </td>
                  <td> {items.lastName}</td>
                  <td> {items.emailId}</td>
                  <td>
                    <button
                      onClick={editEmployee}
                      className="btn btn-info"
                    >
                      Update{' '}
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={deleteEmployee}
                      className="btn btn-danger"
                    >
                      Delete{' '}
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={viewEmployee}
                      className="btn btn-info"
                    >
                      View{' '}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ListUser
