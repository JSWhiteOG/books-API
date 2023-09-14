const router = require('express').Router()
const db = require('../models')

//index
router.get('/', (req, res) => {
    db.Books.find()
    .then((books) => {
      res.render('places/index', { books })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  db.Books.create(req.body)
  .then(() => {
      res.redirect('/books')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', { message })
  }
  else {
      res.render('error404')
  }
  })
})


//new
router.get('/new', (req, res) => {
  res.render('places/new')
})

//show page
router.get('/:id', (req, res) => {
    db.Books.findById(req.params.id)
    .then(books => {
        res.render('places/show', { books, id: req.params.id })
    })
    .catch(err => {
        console.log('err', err)
        res.render('404')
    })
  })

  
module.exports = router

    
