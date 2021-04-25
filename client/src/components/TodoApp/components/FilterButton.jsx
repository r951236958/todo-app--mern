import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="px-4 py-2 border border-yellow-600"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="hidden visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="hidden visually-hidden"> tasks</span>
    </button>
  )
}

export default FilterButton;