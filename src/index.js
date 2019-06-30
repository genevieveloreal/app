import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import app from './App'
import MovieView from './views/movie-view/movie'
import './index.css'

const routing = (
    <Router>
        <div>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={app} />
            <Route path={process.env.PUBLIC_URL + '/movie/:id'} component={MovieView} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA