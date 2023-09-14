require('dotenv').config()
const db = require('../models')

db.Books.create([{
    title: 'Little Red Riding Hood',
    cover:'/images/red.jpg',
    description: 'A young girl journeys to bring her grandmother a picnic basket of food, and encounters a dangerous wolf',
    Published_Year: 1953,
    quantity: 4
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})

