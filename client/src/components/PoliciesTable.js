import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import moment from "moment";
import IdFilter from "./IdFilter";
import Link from "@material-ui/core/Link";

export default class PoliciesTable extends React.Component {
  constructor() {
    super();
    this.state = {
      policies: [],
      filteredIds: []
    };
  }
  componentDidMount() {
    axios.get(`https://www.mocky.io/v2/580891a4100000e8242b75c5`).then(res => {
      const policies = res.data.policies;
      this.setState({ policies: policies, filteredIds: policies });
    });
  }

  filterIds = idFilter => {
    const policies = this.state.policies;
    let filteredIds = policies.filter(client => {
      let policyIds = client.id.toLowerCase();
      return policyIds.indexOf(idFilter.toLowerCase()) !== -1;
    });
    this.setState({ filteredIds: filteredIds });
  };

  render() {
    return (
      <div>
        <IdFilter onChange={this.filterIds} />
        <h3> Number of search results: {this.state.filteredIds.length}</h3>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Amount insured</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Inception Date</TableCell>
                <TableCell align="right">Installment Payment</TableCell>
                <TableCell align="right">Client ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.filteredIds.map(policy => (
                <TableRow key={policy.id}>
                  <TableCell component="th" scope="row">
                    {policy.id}
                  </TableCell>
                  <TableCell align="right">{policy.amountInsured}</TableCell>
                  <TableCell align="right">{policy.email}</TableCell>
                  <TableCell align="right">
                    {moment(policy.inceptionDate).format("YYYY/MM/DD")}
                  </TableCell>
                  <TableCell align="right">
                    <div>{policy.installmentPayment.toString()}</div>
                  </TableCell>
                  <TableCell align="right">
                    <Link
                      to={`/policy/${policy.clientId}`}
                      onChange={this.handleClick}
                      href={`/policy/${policy.clientId}`}
                      theclientid={this.state.clientId}
                    >
                      {policy.clientId}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
