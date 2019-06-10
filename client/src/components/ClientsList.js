import React from "react";
import axios from "axios";
import NameFilter from "./NameFilter";
import ClientInfo from "./ClientInfo";
import IdFilter from "./IdFilter";

export default class ClientList extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredClients: [],
      policies: [],
      nameFilter: ""
    };
  }
  componentDidMount() {
    axios.get(`https://www.mocky.io/v2/5808862710000087232b75ac`).then(res => {
      const filteredClients = res.data.clients;

      this.setState({ filteredClients });
      console.log(this.state.filteredClients, this.state.filteredClients[0].id);
    });
    axios.get(`https://www.mocky.io/v2/580891a4100000e8242b75c5`).then(res => {
      const policies = res.data.policies;
      this.setState({ policies });
      console.log(this.state.policies);
    });
  }

  filterNames = nameFilter => {
    const clients = this.state.filteredClients;
    let filteredNames = clients.filter(client => {
      let clientName = client.name.toLowerCase();
      return clientName.indexOf(nameFilter.toLowerCase()) !== -1;
    });
    this.setState({ filteredClients: filteredNames });
    console.log(filteredNames);
  };

  filterIds = idFilter => {
    const clients = this.state.filteredClients;
    let filteredIds = clients.filter(client => {
      let clientId = client.id.toLowerCase();
      return clientId.indexOf(idFilter.toLowerCase()) !== -1;
    });
    this.setState({ filteredClients: filteredIds });
    console.log(filteredIds);
  };

  render() {
    return (
      <div>
        <NameFilter
          clients={this.state.filteredClients}
          onChange={this.filterNames}
        />
        <IdFilter
          clients={this.state.filteredClients}
          onChange={this.filterIds}
        />
        <br />

        <ClientInfo
          clients={this.state.filteredClients}
          policies={this.state.policies}
        />
      </div>
    );
  }
}
