import React from 'react'
import './App.css';
import AppHeader from './components/common/AppHeader';
import ListBoardComponent from './components/board/ListBoardComponent';
import AppFooter from './components/common/AppFooter';
import SignIn from './components/user/auth/signin/SignIn'
import SignUp from './components/user/auth/signup/SignUp'
import Mypage from './components/user/mypage/Mypage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <AppHeader />

      <Route exact path="/">
        <ListBoardComponent />
      </Route>


      <Route path="/signin">
        <SignIn />
      </Route>


      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/mypage">
        <Mypage />
      </Route>


      <AppFooter />
    </Router>
  )

}