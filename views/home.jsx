const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>Welcome to  Bookworms!</h1>
              <img src='/images/bookworms.jpg' height={500}/>
          </main>
      </Def>
    )
  }
  

module.exports = home
