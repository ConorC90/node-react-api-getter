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
import IdFilter from "./IdFilter";

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
      policies: []
    };
  }
  componentDidMount() {
    axios.get(`https://www.mocky.io/v2/580891a4100000e8242b75c5`).then(res => {
      const policies = res.data.policies;
      this.setState({ policies });
    });
  }

  filterIds = idFilter => {
    const policies = this.state.policies;
    let filteredIds = policies.filter(client => {
      let policyIds = client.id.toLowerCase();
      return policyIds.indexOf(idFilter.toLowerCase()) !== -1;
    });
    this.setState({ policies: filteredIds });
    console.log(filteredIds);
  };

  render() {
    return (
      <div>
        <IdFilter onChange={this.filterIds} />
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
              {this.state.policies.map(policy => (
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
                  <TableCell align="right">{policy.clientId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}