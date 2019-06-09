import React from "react";
import axios from "axios";
import NameFilter from "./NameFilter";
import ClientInfo from "./ClientInfo";
import IdFilter from "./IdFilter";

export default class ClientList extends React.Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      filteredClients: [],
      nameFilter: ""
    };
  }
  componentDidMount() {
    axios.get(`https://www.mocky.io/v2/5808862710000087232b75ac`).then(res => {
      console.log(res.data.clients);
      const clients = res.data.clients;
      // filteredNames: clients
      this.setState({ clients, filteredClients: clients });
      console.log(this.state.filteredClients);
    });
  }

  filterNames = nameFilter => {
    const clients = this.state.clients;
    let filteredNames = clients.filter(client => {
      let clientName = client.name.toLowerCase();
      return clientName.indexOf(nameFilter.toLowerCase()) !== -1;
    });
    this.setState({ filteredClients: filteredNames });
    console.log(filteredNames);
  };

  filterIds = idFilter => {
    const clients = this.state.clients;
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
        <ClientInfo clients={this.state.filteredClients} />
      </div>
    );
  }
}
