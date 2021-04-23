import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from '../../components/Nav'
import Heros from '../Heros'
import Articles from '../Articles'
// import Article from '../Article'
import Article from '../../components/Article'
import Category from '../Category'



const App = () => {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
      </Switch>


      {/* <Articles />
      <Heros /> */}

    </div>
  )
}

export default App
