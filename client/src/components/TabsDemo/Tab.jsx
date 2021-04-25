import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Box from '@material-ui/core/Box'

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
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

export default function FullWidthTabs({ children, activeIndex, onChange }) {
  const classes = useStyles()
  const [activeIndex, setActiveIndex] = useState(0)
  const theme = useTheme()
  const handleChange = (event, newValue) => {
    setActiveIndex(newValue)
  }

  const handleChangeIndex = (index) => {
    setActiveIndex(index)
  }

  const [currentIndex, setCurrentIndex] = useState(1)
  useEffect(() => {
    if (activeIndex) {
      setCurrentIndex(activeIndex)
    }
  }, [activeIndex])

  const tabClick = (key) => {
    if (key === currentIndex) {
      return
    }
    setCurrentIndex(key)

    onChange(key)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Tabs
          value={activeIndex}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeIndex}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={activeIndex} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={activeIndex} index={1} dir={theme.direction}>
          slide n°2
          <Select value={10} autoWidth={false}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </TabPanel>
        <TabPanel value={activeIndex} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
