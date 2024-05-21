const React = require('react')
const Def = require('./default')


//Error Page
function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                  <img src="public\images\A-Sweet-Mistake.jpg" alt="an sweet mistake" />  
                  <div>
                    Photo by <a href= "https://unsplash.com/@rojekilian">Sarah Kilian</a> on <a href="https://images.unsplash.com/photo-1555861496-0666c8981751?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">Unsplash</a>
                  </div>
                </div>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404

