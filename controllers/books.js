const router = require('express').Router()
const db = require('../models')
const books = require('../models/books')

//index
router.get('/', (req, res) => {
    db.Books.find()
    .then((books) => {
      res.render('books/index', { books })
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
      res.render('books/new', { message })
  }
  else {
      res.render('error404')
  }
  })
  
})


//new
router.get('/new', (req, res) => {
  res.render('books/new')
})

//show page
router.get('/:id', (req, res) => {
    db.Books.findById(req.params.id)
    
    .then(books => {
        res.render('books/show', { books, id: req.params.id })
    })
    .catch(err => {
        console.log('err', err)
        res.render('404')
    }) 
  })
  
  router.put('/:id', (req, res) => {
  db.Books.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/books/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})
  //delete
router.delete('/:id', (req, res) => {
  db.Books.findByIdAndDelete(req.params.id)
  .then(books => {
      res.redirect('/books')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  db.Books.findById(req.params.id)
  .then(books => {
      res.render('books/edit', { books })
  })
  .catch(err => {
      res.render('error404')
  })
})

  
module.exports = router

    
