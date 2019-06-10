import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

import TextField from "@material-ui/core/TextField";

const useStylesReddit = makeStyles(theme => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff"
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    }
  },
  focused: {}
}));

function RedditTextField(props) {
  const classes = useStylesReddit();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

class Namefilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: ""
    };
  }
  handleChange = e => {
    this.setState({
      nameFilter: e.target.value
    });
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div className="cities-filter">
        <p>Search our clients by name:</p>
        <RedditTextField
          label="Search by Name"
          placeholder="Search by Name"
          variant="filled"
          id="reddit-input"
          className="form-control"
          value={this.state.clientFilter}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Namefilter;
