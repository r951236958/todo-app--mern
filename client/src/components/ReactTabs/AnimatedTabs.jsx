import React, { useRef, useState } from 'react'
import  { useRect } from '@reach/rect'
import { Tabs } from '@reach/tabs'

import { AnimatedContext, HORIZONTAL_PADDING } from './useTabs'

const AnimatedTabs = ({ color, children, ...rest }) => {
  const [activeRect, setActiveRect] = useState(null);
  // const colors = ['firebrick', 'goldenrod', 'dodgerblue']
  // const [tabIndex, setTabIndex] = useState(0)
  // const backgroundColor = colors[tabIndex]
    // const colors = [bgColor]
    // const [tabIndex, setTabIndex] = useState(0)
    // const backgroundColor = colors[tabIndex]
    const ref = useRef();
    const rect = useRect(ref);
    return (
      // put the function to change the styles on context so an active Tab
      // can call it, then style it up
      <AnimatedContext.Provider value={setActiveRect}>
        {/* make sure to forward props since we're wrapping Tabs */}
        <Tabs
          // onChange={(index) => setTabIndex(index)}
          {...rest}
          ref={ref}
          style={{
            ...rest.style,
            position: 'relative',
            color: 'white',
            
          }}
        >
          <div
            style={{
              position: 'absolute',
              height: 2,
              background: color,
              transition: 'all 300ms ease',
              left:
                (activeRect && activeRect.left) -
                (rect && rect.left) +
                HORIZONTAL_PADDING,
              top: (activeRect && activeRect.bottom) - (rect && rect.top),
              // subtract both sides of horizontal padding to center the div
              width: activeRect && activeRect.width - HORIZONTAL_PADDING * 2,
            }}
          />
          {children}
        </Tabs>
      </AnimatedContext.Provider>
    )
}

export default AnimatedTabs
