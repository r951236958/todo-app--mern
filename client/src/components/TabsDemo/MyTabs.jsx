// import React, { useEffect, useState, useCallback } from 'react'
import React from 'react'
// import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const MyTabs = ({ tabs, index }) => {
  // const [currentIndex, setCurrentIndex] = useState(1)
  // useEffect(() => {
  //   if (activeIndex) {
  //     setCurrentIndex(activeIndex)
  //   }
  // }, [activeIndex])

  // const tabClick = (key) => {
  //   if (key === currentIndex) {
  //     return
  //   }
  //   setCurrentIndex(key)

  //   onChange(key)
  // }
  return (
    <div>
        {tabs.map((tab, i) => {
          return <Tab label={tab.title} key={i} {...a11yProps(index)} />
        })}
    </div>
  )
}

export default MyTabs
