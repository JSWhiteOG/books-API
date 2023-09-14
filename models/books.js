const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
{
    title: {
      type: String, 
      required: true},
    cover:{
      type: String, 
      default: 'public/images/question.jpg'},
    description: {
      type: String, 
      default: 'No summary has been made yet'},
    Published_Year: {
      type: Number, 
      min:[1750, 'Doubt it...'], 
      max:[2023, 'You from the future, stranger?']},
    quantity: {
      type:Number, 
      min: 0,
      required:true
  },}

  )
  
module.exports = mongoose.model('Books', bookSchema)