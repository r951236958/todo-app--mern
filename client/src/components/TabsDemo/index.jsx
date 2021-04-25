import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// import Typography from '@material-ui/core/Typography'
// import MenuItem from '@material-ui/core/MenuItem'
// import Select from '@material-ui/core/Select'
import Box from '@material-ui/core/Box'

// import MyTabs from './MyTabs'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}


function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function FullWidthTabs({tabs}) {
  const classes = useStyles()
  const [activeIndex, setActiveIndex] = useState(0)
  const theme = useTheme()
  const handleChange = (event, newValue) => {
    setActiveIndex(newValue)
  }

  const handleChangeIndex = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Tabs
          activeIndex={activeIndex}
          handleChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabs.map((tab, i) => {
            return (
              <Tab label={tab.title} key={i} {...a11yProps(tab.id)} />
            )
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeIndex}
        onChangeIndex={handleChangeIndex}
      >
      {tabs.map((tab,i)=> {
        return <TabPanel value={activeIndex} index={tab.id} dir={theme.direction} key={i} >
          {tab.content}
        </TabPanel>
      })}
        
      </SwipeableViews>
    </div>
  )
}

