import React, { useEffect, useRef, useState } from 'react'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const Todo = (props) => {
  const [isEditing, setEditing] = useState(false)
  const [newName, setNewName] = useState('')

  const editFieldRef = useRef(null)
  const editButtonRef = useRef(null)

  const wasEditing = usePrevious(isEditing)

  function handleChange(e) {
    setNewName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.editTask(props.id, newName)
    setNewName('')
    setEditing(false)
  }


  const editingTemplate = (
    <form
      className="flex items-center justify-around h-10 mx-4"
      onSubmit={handleSubmit}
    >
      <div className="inline-flex items-center w-4/5 h-10">
        <input
          id={props.id}
          className="ml-4 leading-3 rounded-md item-icon"
          type="text"
          placeholder={props.name}
          value={newName}
          ref={editFieldRef}
          onChange={handleChange}
        />
      </div>
      <div className="inline-flex items-center justify-start w-1/5">
        <button
          type="submit"
          className="mb-0 text-green-400 hover:text-green-500"
        >
          <i className="mx-2 fas fa-check" />
        </button>
        <button
          type="button"
          className="text-red-400 hover:text-red-500 item-delete"
          onClick={() => setEditing(false)}
        >
          <i className="mx-2 fas fa-times-circle" />
        </button>
      </div>
    </form>
  )

  const viewTemplate = (
    <>
      <div className="flex items-center justify-around h-10 mx-4">
        <div className="inline-flex items-center w-4/5 h-10">
          <input
            className="w-4 h-4 border border-gray-300 rounded-full outline-none appearance-none cursor-pointer checked:bg-blue-400 item-icon"
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label className="ml-3 leading-3 item-name" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="inline-flex items-center justify-start w-1/5">
          <button
            type="button"
            className="text-blue-400 hover:text-blue-500 item-edit"
            onClick={() => setEditing(true)}
            ref={editButtonRef}
          >
            <i className="mx-2 fas fa-pen" />
          </button>
          <button
            type="button"
            className="item-delete"
            onClick={() => props.deleteTask(props.id)}
          >
            <i className="mx-2 fas fa-trash-alt" />
          </button>
        </div>
      </div>
    </>
  )

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus()
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus()
    }
  }, [wasEditing, isEditing])
  
  return (
    <>
      <li className="item">
        <div className="inline-flex w-full bg-dark-600">
          {isEditing ? editingTemplate : viewTemplate}
        </div>
      </li>
    </>
  )
}

export default Todo
