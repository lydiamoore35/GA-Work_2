const express = require('express')
const bookmarks = express.Router()
const Bookmark = require('../models/bookmark.js')

// SEED route
bookmarks.get('/seed', (req, res) => {
    Bookmark.create({title: 'Hello'}, (err, createdBookmark) => {
        res.json(createdBookmark)
    })
})

// INDEX
bookmarks.post('/', (req, res) => {
  Bookmark.create(req.body, (error, createdBookmark) => {
    if (error) {
      res.status(400).json({ error: error.message })
    }
    res.status(200).json(createdBookmark) //  .json() will send proper headers in response so client knows it's json coming back
  })
})

// // NEW - we don't do this with an API

// // DELETE
// holidays.delete('/:id', (req, res) => {
//     Holiday.findByIdAndRemove(req.params.id, (err, deletedHoliday) => {
//       if (err) {
//         res.status(400).json({ error: err.message })
//       }
//       res.status(200).json(deletedHoliday)
//     })
//   })

// // UPDATE
// holidays.put('/:id', (req, res) => {
//     Holiday.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedHoliday) => {
//       if (err) {
//         res.status(400).json({ error: err.message })
//       }
//       res.status(200).json(updatedHoliday)
//     })
//   })

// // CREATE
// holidays.post('/', (req, res) => {
//   Holiday.create(req.body, (error, createdHoliday) => {
//     if (error) {
//       res.status(400).json({ error: error.message })
//     }
//     res.status(200).json(createdHoliday) //  .json() will send proper headers in response so client knows it's json coming back
//    })
// })


module.exports = bookmarks