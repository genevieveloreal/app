import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import MovieView from './views/movie-view/movie-view'
import OtherView from './views/other-view/other-view'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/movie-view" component={MovieView} />
            <Route path="/other-view" component={OtherView} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA