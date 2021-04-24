import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Nav from '../../components/Nav'
import Heros from '../Heros'
import Articles from '../Articles'
// import Article from '../Article'
import Article from '../Article'
import Category from '../Category'



const App = () => {
  return (
    <div className="App">


      <Nav />
      <Heros />


      <Switch>
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:slug" component={Category} />
        <Redirect to="/" />

      </Switch>





    </div>
  )
}

export default App
