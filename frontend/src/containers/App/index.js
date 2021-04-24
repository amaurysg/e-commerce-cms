import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Nav from '../../components/Nav'
import Heros from '../Heros'
import Articles from '../Articles'
import Article from '../Article'
import Category from '../Category'
import Error404 from '../../components/Error404'



const App = () => {
  return (
    <div className="App">



      <Nav />



      <Switch>

        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:slug" component={Category} />
        <Route path="/" component={Articles} exact />
        <Redirect to={Error404} />

      </Switch>







    </div>
  )
}

export default App
