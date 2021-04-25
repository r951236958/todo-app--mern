import React, { useState } from 'react'

function Form(props) {
  const [name, setName] = useState('')

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.addTask(name)
    setName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div id="hint-title" className="text-2xl font-bold">
        <i className="text-3xl leading-none text-yellow-300 align-bottom mdi mdi-star" />
        <label htmlFor="new-todo-input" className="label__lg">
          Todos
        </label>
      </div>
      <div className="w-full px-10 py-2 add-item-input">
        <button
          type="submit"
          className="inline-block px-3 py-2 mb-2 -m-2 font-semibold border border-r-0 border-gray-400 rounded-l-lg shadow focus:outline-none hover:text-blue-500"
        >
          <i className="mdi mdi-plus" />
        </button>
        <input
          type="text"
          id="new-todo-input"
          className="inline-block px-3 py-2 border border-gray-400 rounded-r-lg shadow appearance-none focus:shadow-outline focus:outline-none"
          name="text"
          placeholder="Add New Item"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
      </div>
    </form>
  )
}

export default Form
