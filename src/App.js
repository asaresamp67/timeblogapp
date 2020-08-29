import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Post from './pages/post/Post'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Navbar from './components/navbar/Navbar'
import TimeContextProvider from './context/TimeContext'
import BlogList from './blogList/BlogList'

function App() {
  return (
    <div className='App'>
      <TimeContextProvider>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/:slug' component={Post} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </TimeContextProvider>
    </div>
  )
}

export default App
