// import Todo from './components/Todo'
// import AccountsLogin from './components/AccountsLogin'
// import CheckboxDemo from './components/CheckboxDemo'
// import TodoDemo from './components/TodoDemo'
// import CheckBox1 from './components/CheckBox1'
// import CheckBox2 from './components/CheckBox2'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

export const tabsData = [
  {
    id: 0,
    title: 'Tab1',
    content: <div>Item One</div>,
  },
  {
    id: 1,
    title: 'Tab2',
    content: (<div>slide n°2
          <Select value={10} autoWidth={false}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
          </Select></div>),
  },
  {
    id: 2,
    title: 'Tab3',
    content: <div>Item Three</div>,
  },
  
]