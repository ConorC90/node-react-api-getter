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

function handleClick(event) {
  event.preventDefault();
}

function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator="›" aria-label="Breadcrumb">
          <Link color="textPrimary" onClick={handleClick}>
            Login{" "}
          </Link>
          <Link color="textPrimary" onClick={handleClick}>
            Search clients
          </Link>
          <Typography color="textPrimary">Search policies</Typography>
        </Breadcrumbs>
      </Paper>
    </div>
  );
}

export default Nav;
