import React, { useState } from 'react'

import axios from 'axios'

const CreateUser = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // const DB_URL = process.env.GATSBY_DB_URL
    const userObject = {
      name: values.name,
      email: values.email,
    }
    axios
      .post('/users/create', userObject)
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    setValues({ name: '', email: '' })
  }
  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="mb-2 form-group">
            <label htmlFor="create-user" className="inline-block mb-2">
              Add User Name
            </label>
            <input
              id="create-user"
              type="text"
              name="name"
              placeholder="User Name"
              value={values.name}
              onChange={handleChange}
              className="block bg-transparent rounded form-input"
            />
          </div>
          <div className="mb-2 form-group">
            <label htmlFor="user-email" className="inline-block mb-2">
              Add User Email
            </label>
            <input
              id="user-email"
              type="text"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              className="block bg-transparent rounded form-input"
            />
          </div>
          <div className="mb-2 form-group">
            <button
              type="submit"
              className="block px-3 py-2 text-gray-100 bg-green-500"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateUser
