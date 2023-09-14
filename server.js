// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.json())

app.use('/books', require('./controllers/books'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req,res)=>{
    res.send('404 page')
})
app.listen(process.env.PORT, ()=> console.log(`listening on port!`))