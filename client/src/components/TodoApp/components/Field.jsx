import React from 'react'

const Field = (props) => {
    const {value, children, inputChange, blur, active,doubleClick} = props
    return (
      <>
        <div className="flex mt-5 space-x-2">
          <div>{children}</div>
          {active ? (
            <input
              className="pb-0 text-base bg-transparent"
              value={value}
              onChange={inputChange}
              onBlur={blur}
              autoFocus
            />
          ) : (
            <div onDoubleClick={doubleClick} className="text-base">
              {value}
            </div>
          )}
        </div>
      </>
    )
}

export default Field
