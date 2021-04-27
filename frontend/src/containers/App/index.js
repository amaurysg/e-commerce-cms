import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Nav from '../../components/Nav'
// import Heros from '../Heros'
import Articles from '../Articles'
import Article from '../Article'
import Category from '../Category'
// import Error404 from '../../components/Error404'
import Footer from '../../components/Footer'



const App = () => {
  return (
    <div className="App">



      <Nav />



      <Switch>

        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:slug" component={Category} exact />
        <Redirect to="/" />
        


      </Switch>



      <Footer />



    </div>
  )
}

export default App
