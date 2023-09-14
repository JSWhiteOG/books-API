const React = require('react')
const Def = require('../default')

function show (data) {  
    return (
    <Def>
      <main>
      <div className="row justify-content-center">
        <div className="col-sm-7">
        <h1>{data.books.title}</h1>
        </div>
        <div className="col-sm-7">
         <img src={data.books.cover} alt={data.books.title} height={600} width={400}/>
        </div>
        <div className="col-sm-8">
        <h2>"{data.books.description}"</h2>
        </div>
        <div className="col-sm-8">
          <h3>This book was published in the year {data.books.Published_Year}.</h3>
        </div>
        <div><h3>There are {data.books.quantity} currently available for purchase</h3></div>
        </div>
      

       
      </main>
    </Def>
)
}
console.log
module.exports = show