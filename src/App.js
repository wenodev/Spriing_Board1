import React, { useState, useEffect } from 'react'
import './App.css';
import AppHeader from './components/common/AppHeader';
import ListBoardComponent from './components/board/ListBoardComponent';
import AppFooter from './components/common/AppFooter';
import SignIn from './components/user/auth/signin/SignIn'
import SignUp from './components/user/auth/signup/SignUp'
import Mypage from './components/user/mypage/Mypage'
import CurrentUser from './services/user/current/CurrentUserService'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: `20%`,
    textAlign: 'center'
  },
}));


export default function App() {
  const classes = useStyles();

  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIdAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [test, setTest] = useState("test111");

  useEffect(() => {

    CurrentUser.getCurrentUser().then(res => {
      console.log(res);
    });


  });


  if (isLoading) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    )
  } else {
    return (
      <Router>
        <AppHeader name={test} />

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


}