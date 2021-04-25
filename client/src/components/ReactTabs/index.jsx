import React from 'react'
import { TabList, TabPanels, TabPanel } from '@reach/tabs'
import AnimatedTab from './AnimatedTab'
import AnimatedTabs from './AnimatedTabs'

const ReactTabs = ({data, bgColor, textColor, borderColor}) => {
  
  return (
    <div className="p-6">
      <AnimatedTabs color={borderColor}>
        <TabList className="justify-around w-full bg-gray-900">
          {data.map((tab, i) => (
            <AnimatedTab
              color={textColor}
              className="flex flex-1 py-2"
              index={i}
              key={i}
            >
              {tab.title}
            </AnimatedTab>
          ))}
        </TabList>
        <TabPanels style={{ padding: 20, background: bgColor }}>
          {data.map((tab, i) => (
            <TabPanel key={i}>{tab.content}</TabPanel>
          ))}
        </TabPanels>
      </AnimatedTabs>
    </div>
  )
}

export default ReactTabs
