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

class Idfilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idFilter: ""
    };
  }
  handleChange = e => {
    this.setState({
      idFilter: e.target.value
    });
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div className="cities-filter">
        <p>Search by ID:</p>
        <RedditTextField
          label="Search by ID"
          placeholder="Search by ID"
          variant="filled"
          id="reddit-input"
          className="form-control"
          value={this.state.idFilter}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Idfilter;
