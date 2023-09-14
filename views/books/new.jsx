const React = require('react')
const Def = require('../default')

function new_form (data) {
    let message = '' 
      if(data.message) {
       message = (
          <h3 className="alert-danger">
           {data.message}
          </h3>
        )
      }
      return (
        <Def>
          <main>
            <h1>Request an additional book</h1>
            {message}
            <form method="POST" action="/books">
              
              <div className="column text-align-center">
  {/* Title */}
  <div className="col-sm-6 col-md-4 col-lg-3"> <div className="form-group">
    <label htmlFor="title">Book's Name</label>
    <input 
    className="form-control" 
    id="title" 
    name="title" 
    required />
  </div></div>
  
  {/* Cover */}
  <div className="col-lg-3"><div className="form-group">
    <label htmlFor="cover">Image of the Cover</label>
    <input 
    defaultValue={'/images/question.jpg'}
    className="form-control" 
    id="cover" 
    name="cover"/>
  </div></div>
  
  {/* Description */}
  <div className="col-lg-3"><div className="form-group">
    <label htmlFor="description">Summary of the book</label>
    <input 
    defaultValue={'No summary has been made yet'}
    className="form-control" 
    id="description" 
    name="description" />
  </div></div>
  
  {/* Year made */}
  <div className="col-sm-6 col-md-4 col-lg-3">
  <div className="form-group">
    <label htmlFor="Published_Year">Year of Publication</label>
    <input 
    type="number"
    className="form-control" 
    id="Published_Year" 
    name="Published_Year" 
    value={new Date().getFullYear()}/>
  </div></div>
  
  {/* Quantity */}
  <div className="col-sm-1"><div className="form-group">
    <label htmlFor="quantity">How many are available?</label>
      <input 
      defaultValue={0}
     type="number"
     className="form-control" 
     id="quantity" 
     name="quantity" 
     />
  </div></div>

</div>

 
  
  
  

  <input className="btn btn-primary" type="submit" value="Add Place" />
  

</form>

           

          </main>
        </Def>
    )
}

module.exports = new_form
