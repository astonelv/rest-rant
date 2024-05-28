const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
                     <div>
                         Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">Unsplash</a>
                    </div>
                 </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>

        </Def>
    )
}

module.exports = home
