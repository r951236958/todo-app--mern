import React, { useState } from 'react'

import axios from 'axios'

const CreateItem = () => {
  const [values, setValues] = useState({
    lv: '',
    four: '',
    five: '',
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
      lv: values.lv,
      four: values.four,
      five: values.five,
    }
    axios
      .post('/api/lv/add', userObject)
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    setValues({ lv: '', four: '', five: '' })
  }
  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="mb-2 form-group">
            <label htmlFor="add-item" className="inline-block mb-2">
              Max Lv
            </label>
            <input
              id="add-item"
              type="text"
              name="lv"
              placeholder="Lv"
              value={values.lv}
              onChange={handleChange}
              className="block bg-transparent rounded form-input"
            />
          </div>
          <div className="mb-2 form-group">
            <label htmlFor="four-number" className="inline-block mb-2">
              ㄓ冠数量
            </label>
            <input
              id="four-number"
              type="text"
              name="four"
              placeholder="Four"
              value={values.four}
              onChange={handleChange}
              className="block bg-transparent rounded form-input"
            />
          </div>
          <div className="mb-2 form-group">
            <label htmlFor="five-number" className="inline-block mb-2">
              5冠数量
            </label>
            <input
              id="five-number"
              type="text"
              name="five"
              placeholder="Five"
              value={values.five}
              onChange={handleChange}
              className="block bg-transparent rounded form-input"
            />
          </div>
          <div className="mb-2 form-group">
            <button
              type="submit"
              className="block px-3 py-2 text-gray-100 bg-green-500"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateItem
