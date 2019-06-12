import React, { Component } from "react";
import Button from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import Link from "@material-ui/core/Link";
import MatchingPolicies from "./MatchingPolicies";
// const items = arr.filter(item => item.arrayWithvalue.indexOf("4") !== -1);

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
      expanded: false,
      clientId: "",
      // policies: [],
      filteredPolicies: []
    };
  }

  // componentDidMount() {
  //   axios.get(`https://www.mocky.io/v2/580891a4100000e8242b75c5`).then(res => {
  //     const policies = res.data.policies;
  //     this.setState({ policies });
  //     console.log(this.state.policies);
  //   });
  // }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
    this.setState(function(prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  };

  handleClick = e => {
    this.theClientID = e.target.value;
    this.filterPoliciesIds(this.theClientID);
  };

  filterPoliciesIds = theClientID => {
    const policies = this.props.policies;
    let filteredPolicies = policies.filter(policy => {
      let clientId = policy.clientId.toLowerCase();
      return clientId.indexOf(theClientID.toLowerCase()) !== -1;
    });
    this.setState({ filteredPolicies: filteredPolicies });
    console.log(filteredPolicies);
    // if (filteredPolicies.length === 0) {
    //   document.getElementById("usersPolicies").innerHTML =
    //     "There are no policies for this client";
    // }
  };

  render() {
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
              // onClick={this.filterIds}
              value={client.id}
            >
              <Typography>{client.name} </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <p> Email: {client.email}</p>
                <p> ID: {client.id} </p>
                <p> Role: {client.role} </p>
                <Link
                  to={`/client/${client.id}`}
                  value={client.id}
                  onClick={this.handleClick}
                  href={`/client/${client.id}`}
                  theClientID={this.state.clientId}
                >
                  Policies linked to User
                </Link>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

export default ClientInfo;
