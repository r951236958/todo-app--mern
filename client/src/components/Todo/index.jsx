import React, { useState } from 'react'
import CheckAll from '../CheckAll'

const Todo = () => {
  const [allChecked, setAllChecked] = useState(false)
  const [isChecked, setIsChecked] = useState({})
  const [formData, setFormData] = useState(data)
  const [checkAll, setCheckAll] = useState(false)
  const [isAllSelected, setisAllSelected] = useState(false)

  const onCheckBoxChange = (checkName, isChecked) => {
    let isAllChecked = checkName === 'all' && isChecked
    let isAllUnChecked = checkName === 'all' && !isChecked
    const checked = isChecked

    const checkList = formData.map((checkmark, index) => {
      if (isAllChecked || city.value === checkName) {
        return Object.assign({}, city, {
          checked,
        })
      } else if (isAllUnChecked) {
        return Object.assign({}, city, {
          checked: false,
        })
      }
      return city
    }
  
  const handleAllCheck = (e) => {
    setAllChecked(e.target.checked)
  }

  const handleSingleCheck = (e) => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked })
  }

  const onDelete = () => {
    console.log(isChecked)
    const newData = data.filter(
      (item) => !Object.keys(isChecked).includes(item.name)
    )
    console.log(newData)
    setFormData(newData)
  }

  const handleCheckedAll = (e) => {
    setCheckAll(e.target.checked)
  }

  return (
    <>
      <div className="flex my-2 space-x-4">
        <div className="box">
          <div className="checkmark_icon">
            <div className="checkmark_stem" />
            <div className="checkmark_kick" />
          </div>
        </div>
        <div className="box">
          <div className="check-mark" />
        </div>
        <div className="box">
          <span className="text-xl font-bold text-green-600 checkmark">
            &#10003;
          </span>
        </div>
        <div className="box checkmark-tick--container">
          <span className="checkmark-tick" />
        </div>
      </div>
      <form className="todoList">
        <input
          type="checkbox"
          id="checkedAll"
          name="checkedAll"
          checked={checkAll}
          onChange={handleCheckedAll}
        />
        <div>
          <label htmlFor="checkAll">
            <input
              id="checkAll"
              name="checkall"
              type="checkbox"
              checked={allChecked}
              onChange={handleAllCheck}
            />
            <span className="ml-4">Check All</span>
          </label>
          <CheckAll
            tick={isCheckedAll}
            onCheck={(e) => onCheck('all', e.target.checked)}
          />
        </div>
        {formData.map((test, index) => (
          <div key={index}>
            <label htmlFor={test.name}>
              <input
                id={test.name}
                type="checkbox"
                name={test.name}
                checked={allChecked ? true : isChecked[test.name]}
                onChange={handleSingleCheck}
              />
              <span className="ml-4">{test.name}</span>
            </label>
          </div>
        ))}
        <button onClick={() => onDelete()}>DELETE</button>
      </form>
    </>
  )
}

const data = [
  {
    name: 'test1',
    result: 'pass',
  },
  {
    name: 'test2',
    result: 'pass',
  },
  {
    name: 'test3',
    result: 'pass',
  },
  {
    name: 'test4',
    result: 'pass',
  },
  {
    name: 'test5',
    result: 'pass',
  },
]

export default Todo
