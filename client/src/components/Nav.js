import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap"
  },
  paper: {
    padding: theme.spacing(1, 2)
  }
}));

function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Paper elevation={0} className={classes.paper}>
          <Breadcrumbs separator="›" aria-label="Breadcrumb">
            <Link color="textPrimary" href="/">
              Login{" "}
            </Link>
            <Link color="textPrimary" href="/clients">
              Search clients
            </Link>
            <Link color="textPrimary" href="/policies">
              Search policies
            </Link>
          </Breadcrumbs>
        </Paper>
      </Router>
    </div>
  );
}

export default Nav;
