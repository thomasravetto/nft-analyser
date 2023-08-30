import React, {Component} from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import CollectionPage from '../routes/CollectionPage/CollectionPage';
import ItemPage from '../routes/ItemPage/ItemPage';
import ErrorPage from '../routes/Home/ErrorPage';
import HomePage from '../routes/Home/HomePage';
import RegisterPage from '../routes/Authentication/RegisterPage';
import './App.css';
import SigninPage from '../routes/Authentication/SigninPage';


const initialState = {
  isLoggedIn: false,
  user: {
    id:'',
    username:'',
    joined:'',
    watchlist: []
  }
}

class App extends Component {
  constructor() {
    super()
    const savedUser = JSON.parse(sessionStorage.getItem('user'));
    this.state = savedUser || initialState;
  }

  addCollectionToWatchlist = (collection) => {
    const username = this.state.user.username;
    fetch("http://localhost:3500/add-to-watchlist", {
      method:"post",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        collection:collection,
        username:username
      })
    })
  }

  removeCollectionFromWatchlist = (collection) => {
    const username = this.state.user.username;
    fetch("http://localhost:3500/remove-from-watchlist", {
      method:"delete",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        collection:collection,
        username:username
      })
    })
  }

  loadUser = (user) => {
    const newUser = {
      isLoggedIn: true,
      user: {
        id: user.id,
        username: user.username,
        joined: user.joined,
        watchlist:[]
        }
      };

    sessionStorage.setItem('user', JSON.stringify(newUser));

    this.setState({
      isLoggedIn: true,
      user: newUser
    });
    window.location.pathname="/"
  }

  // router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element: <Home/>,
  //     errorElement: <ErrorPage/>
  //   },
  //   {
  //     path:"/collection/:collection_slug",
  //     element: <CollectionPage addCollectionToWatchlist={this.addCollectionToWatchlist}/>
  //   },
  //   {
  //     path:"/:collection_address/:item_id",
  //     element: <ItemPage/>
  //   },
  //   {
  //     path:"/register",
  //     element: <RegisterPage loadUser={this.loadUser}/>
  //   },
  //   {
  //     path:"/signin",
  //     element: <SigninPage loadUser={this.loadUser}/>
  //   }
  // ])

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage watchlist={this.state.user.watchlist} updateWatchlistInParent={this.updateWatchlistInParent} isLoggedIn={this.state.isLoggedIn} username={this.state.user.username}/>}/>
          <Route path='/register'element={<RegisterPage loadUser={this.loadUser}/>}/>
          <Route path='/login' element={<SigninPage loadUser={this.loadUser}/>}/>
          <Route path='/collection/:collection_slug'element={<CollectionPage addCollectionToWatchlist={this.addCollectionToWatchlist} removeCollectionFromWatchlist={this.removeCollectionFromWatchlist} username={this.state.user.username}/>}/>
          <Route path='/:collection_address/:item_id'element={<ItemPage/>}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      {/* <RouterProvider router={this.router} /> */}
      </BrowserRouter>
    )
  }
}

export default App;
