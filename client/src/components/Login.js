import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    flexBasis: 200
  }
}));

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      clients: [],
      user: []
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.filterNames = this.filterNames.bind(this);
  }
  componentDidMount() {
    axios.get(`https://www.mocky.io/v2/5808862710000087232b75ac`).then(res => {
      const clients = res.data.clients;
      this.setState({ clients: clients });
      console.log(this.state.clients);
    });
  }

  filterNames = nameFilter => {
    const clients = this.state.clients;
    let filteredNames = clients.filter(client => {
      let clientName = client.name.toLowerCase();
      return clientName.indexOf(nameFilter.toLowerCase()) !== -1;
    });

    this.setState({ user: filteredNames });
    let userEmail = filteredNames[0].email;
    let role = filteredNames[0].role;

    if (this.state.password !== userEmail) {
      localStorage.setItem("authLevel", null);
      console.log("wrong password");
    }
    if (this.state.password == userEmail && role !== "admin") {
      localStorage.setItem("authLevel", "user");
      console.log("Not admin");
    }
    if (this.state.password == userEmail && role == "admin") {
      localStorage.setItem("authLevel", "admin");
      console.log("good to go");
    }
  };

  handleChange = prop => event => {
    console.log(this.state.username);
    this.setState({ [prop]: event.target.value });
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  onSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const user = {
      username,
      password
    };
    this.filterNames(username);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="linkDiv">
            <p>Username:</p>{" "}
            <TextField
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange("username")}
              required
              id="standard-required"
              label="Required"
              margin="normal"
            />
          </div>
          <div className="linkDiv">
            <p>Password:</p>
            <TextField
              name="password"
              id="outlined-adornment-password"
              type={this.state.showPassword ? "text" : "password"}
              label="Password"
              value={this.state.password}
              onChange={this.handleChange("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <IconButton type="submit" variant="contained">
            OK
          </IconButton>
        </form>
      </div>
    );
  }
}
