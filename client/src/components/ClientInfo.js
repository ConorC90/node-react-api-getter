import React, { Component } from "react";
import Button from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

class ClientInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
    this.setState(function(prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  };

  handleChange = e => {
    this.setState({
      nameFilter: e.target.value
    });
    this.props.onChange(e.target.value);
    // this.props.onChange(this.state.nameFilter);
  };

  render() {
    // console.log(this.props.clients[1].name);

    return (
      <div>
        {this.props.clients.map((client, i) => (
          <ExpansionPanel
            key={i}

            // {...this.props.clients.map((client, i) => <div>{client.name}</div>)}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{client.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <p> Email: {client.email}</p>
                <p> ID: {client.id} </p>
                <p> Role: {client.role} </p>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

export default ClientInfo;
