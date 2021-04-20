let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

let lv = require('../models/lv.model')

router.route('/add').post((req, res, next) => {
  lv.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

router.route('/').get((req, res, next) => {
  lv.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

router.route('/edit/:id').get((req, res, next) => {
  lv.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

router.route('/update/:id').put((req, res, next) => {
  lv.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('User updated successfully !')
      }
    }
  )
})

router.route('/delete/:id').delete((req, res, next) => {
  lv.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
