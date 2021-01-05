import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    titleText: {
        "&:hover": {
            color: "inherit",
            textDecoration: "none"
        },
    },
    sideNav: {
        marginRight: theme.spacing(3),
        color: "inherit",
        float: "right",
        "&:hover": {
            color: "inherit",
            textDecoration: "none"
        }
    }

}));



export default function AppHeader(props) {
    const classes = useStyles();


    function handleMenuClick() {
        props.onLogout();
    }

    if (!props.currentUser) {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={classes.title}>
                            <Link color="inherit" component={RouterLink} variant="h6" className={classes.titleText} to="/">
                                Home
                            </Link>
                        </div>
                        <Link color="inherit" component={RouterLink} className={classes.sideNav} to="/signin">
                            SignIn
                        </Link>
                        <Link color="inherit" component={RouterLink} className={classes.sideNav} to="/signup">
                            SignUp
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    } else {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={classes.title}>
                            <Link color="inherit" component={RouterLink} variant="h6" className={classes.titleText} to="/">
                                Home
                            </Link>
                        </div>
                        <Link color="inherit" component={RouterLink} className={classes.sideNav} to="/mypage">
                            Mypage
                        </Link>
                        <Link color="inherit" component={RouterLink} className={classes.sideNav} onClick={handleMenuClick}>
                            Logout
                        </Link>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }





}
