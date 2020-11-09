import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './Cart'
import Detail from './Detail'
import Home from './Home'
import List from './List'
import My from './My'
import Search from './Search'
import Login from './Login'
import store from './store'


const App = () =>{
    return <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/list' component={List}/>
                <Route path='/my' component={My}/>
                <Route path='/search' component={Search}/>
                <Route path='/detail' component={Detail}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </Router>
    </Provider>
}

export default App;