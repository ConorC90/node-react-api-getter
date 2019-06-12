import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import moment from "moment";
import Link from "@material-ui/core/Link";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import MatchingPolicies from "./MatchingPolicies";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    width: "90%"
  }
}));

export default class PoliciesTable extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredClients: [],
      clients: []
    };
  }
  componentDidMount() {
    axios
      .get(`https://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => {
        const clients = res.data.clients;
        this.setState({ clients: clients, filteredClients: clients });
        console.log(this.state.clients);
        console.log(this.props.match.params.policyId);
      })
      .then(res => {
        this.filterPoliciesIds(this.props.match.params.policyId);
        console.log(this.props.match.params.policyId);
      });
  }

  filterPoliciesIds = theClientID => {
    console.log(theClientID);
    const clients = this.state.clients;
    console.log(this.state.clients);
    let filteredClients = clients.filter(client => {
      let policyId = client.id;
      console.log(client.policyId);
      return policyId.indexOf(theClientID) !== -1;
    });
    this.setState({ filteredClients: filteredClients });
  };

  render() {
    return (
      <div>
        {this.state.filteredClients.map((client, i) => (
          <ExpansionPanel key={i}>
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
                  onChange={this.handleClick}
                  href={`/client/${client.id}`}
                  theclientid={this.state.clientId}
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
