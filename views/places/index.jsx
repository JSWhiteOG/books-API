const React = require('react')
const Def = require('../default')

function index(data){
    let booksFormatted = data.books.map((books) => {
        return (
          <div className="col-sm-4">
            <h2>
              <a href={`/books/${books.id}`}>
                {books.title}
              </a>
            </h2>
            <img  src={books.cover} alt={books.cover} height={400} width={250}/>
            <p>
              {books.description}
            </p>
            <p>Published in: {books.Published_Year}</p>
            <p>
              Amount available: {books.quantity}
            </p>
          </div>
        )
      })
      
      return (
        <Def>
            <main>
                <h1>Books</h1>
                <div className="row">
                {booksFormatted}
                </div>
            </main>
        </Def>
    )
    }
    
module.exports = index