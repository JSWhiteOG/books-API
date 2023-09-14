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
        <h2>{data.books.description}</h2>
        </div>
        <div className="col-sm-8">
          <h3>This book was published in the year {data.books.Published_Year}.</h3>
        </div>
        <div><h3>There are {data.books.quantity} currently available for purchase</h3></div>
        </div>
      

        <a href={`/books/${data.id}/edit`} className="btn btn-primary"> 
             Edit
        </a>

        <form method="POST" action={`/books/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
               Delete
            </button>
       </form> 
       
      </main>
    </Def>
)

}

module.exports = show
