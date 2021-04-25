import React, { useContext } from 'react'
import { useRect } from '@reach/rect'
import { Tab, useTabsContext } from '@reach/tabs'
import { AnimatedContext, HORIZONTAL_PADDING } from './useTabs'

const AnimatedTab = ({ color, index, ...props }) => {
  // get the currently selected index from useTabsContext
  const { selectedIndex } = useTabsContext()
  const isSelected = selectedIndex === index
  // measure the size of our element, only listen to rect if active
  const ref = React.useRef()
  const rect = useRect(ref, { observe: isSelected })
  // get the style changing function from context
  const setActiveRect = useContext(AnimatedContext)
  // callup to set styles whenever we're active
  React.useLayoutEffect(() => {
    if (isSelected) {
      setActiveRect(rect)
    }
  }, [isSelected, rect, setActiveRect])
  return (
    <Tab
      ref={ref}
      {...props}
      style={{
        ...props.style,
        color: `${isSelected ? color : 'inherit'}`,
        border: 'none',
        padding: `4px ${HORIZONTAL_PADDING}px`,
      }}
    />
  )
}

export default AnimatedTab
