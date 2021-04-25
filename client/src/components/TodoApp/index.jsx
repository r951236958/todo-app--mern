import React, { useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import Checkbox from '@material-ui/core/Checkbox'
// import Card from '@material-ui/core/Card'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
// import Switch from '@material-ui/core/Switch'
import Tooltip from '@material-ui/core/Tooltip'
import APIHelper from './APIHelper'
import styles from './style'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import CustomizedInputBase from '../CustomizedInputBase'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px',
    width: '100%',
  },
  addTodo: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    width: '80%',
  },
  input: {
    padding: '2px 4px',
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

const GreenCheckbox = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />)

const DeleteIcon = () => <span className="material-icons">delete</span>

const StyledTodoHeader = styled.div({
  position: 'relative',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  width: '80%',
  flexFow: 'row',
  alignContent: 'space-between',
})

// const StyledTodoLabel = styled(FormControlLabel).attrs({
//   className: `todo-label`,
// })``

function TodoApp() {
  const classes = useStyles()
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  // const [checked, setChecked] = useState({})
  const [allChecked, setAllChecked] = useState(false)
  const [isChecked, setIsChecked] = useState({})
  // const [formData, setFormData] = useState(todos)

  const handleAllCheck = e => {
    setAllChecked(e.target.checked)
  }

  const handleSingleCheck = e => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked })
  }
  
  const onDelete = () => {
    console.log(isChecked)
    const newData = todos.filter(
      (item) => !Object.keys(isChecked).includes(item.task)
    )
    console.log(newData)
    setTodos(newData)
  }

  useEffect(() => {
    const fetchTodoAndSetTodos = async () => {
      const todos = await APIHelper.getAllTodos()
      setTodos(todos)
    }
    fetchTodoAndSetTodos()
  }, [])

  const createTodo = async (e) => {
    e.preventDefault()
    if (!todo) {
      alert('please enter something')
      return
    }
    if (todos.some(({ task }) => task === todo)) {
      alert(`Task: ${todo} already exists`)
      return
    }
    const newTodo = await APIHelper.createTodo(todo)
    setTodos([...todos, newTodo])
  }

  const deleteTodo = async (e, id) => {
    try {
      e.stopPropagation()
      await APIHelper.deleteTodo(id)
      setTodos(todos.filter(({ _id: i }) => id !== i))
    } catch (err) {
      console.log(err)
    }
  }

  const updateTodo = async (e, id) => {
    e.stopPropagation()
    const payload = {
      completed: !todos.find((todo) => todo._id === id).completed,
    }
    const updatedTodo = await APIHelper.updateTodo(id, payload)
    setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)))
  }

  const todoItemClass = `list-group-item list-group-item-action flex border-t border-gray-400 border-opacity-60 relative justify-between py-1 px-2 w-full`

  return (
    <div className="px-2 py-10 mx-auto my-10 md:w-full lg:w-2/3">
      <CustomizedInputBase />
      <Paper component="form">
        <FormGroup className="new-todo">
          <div className={classes.addTodo}>
            <InputBase
              className={classes.input}
              id="todo-input"
              placeholder="Add New Todo"
              inputProps={{ 'aria-label': 'add new task' }}
              value={todo}
              onChange={({ target }) => setTodo(target.value)}
            />
            <IconButton
              type="submit"
              color="primary"
              aria-label="add todos"
              onClick={createTodo}
            >
              <span className="material-icons">add</span>
            </IconButton>
          </div>
        </FormGroup>
        <div className="list-group">
          <FormGroup className={todoItemClass}>
            <StyledTodoHeader>
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={allChecked}
                    onChange={handleAllCheck}
                    name="checkall"
                  />
                }
                style={styles.label}
                label="Select All"
              />
              <Tooltip title="Delete All" placement="top">
                <IconButton
                  color="secondary"
                  aria-label="delete all tasks"
                  onClick={() => onDelete()}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </StyledTodoHeader>
          </FormGroup>
          <Divider style={styles.divider} />
          {todos.map(({ task, _id }, i) => (
            <FormGroup className={todoItemClass} key={i}>
              <div className={classes.addTodo}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={allChecked ? true : isChecked[task]}
                      onChange={handleSingleCheck}
                      name={task}
                    />
                  }
                  style={styles.label}
                  label={task}
                  onChange={(e) => updateTodo(e, _id)}
                />

                <Tooltip title="Delete task" placement="top">
                  <IconButton
                    color="secondary"
                    aria-label="delete todos"
                    onClick={(e) => deleteTodo(e, _id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </FormGroup>
          ))}
        </div>
      </Paper>
    </div>
  )
}

export default TodoApp
