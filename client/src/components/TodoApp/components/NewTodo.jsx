import React from 'react'
import { navigate } from '@reach/router'

const NewTodo = () => (
  <TodoForm
    onSubmit={async todo => {
      let id = await createNewTodo(todo)
      // put some state on the location
      navigate("/todos", { state: { newId: id } })
    }}
  />
)

export default NewTodo
