import React from "react";
import axios from "axios";
import NameFilter from "./NameFilter";

export default class ClientList extends React.Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      filteredNames: [],
      nameFilter: ""
    };
  }
  componentDidMount() {
    axios.get(`https://www.mocky.io/v2/5808862710000087232b75ac`).then(res => {
      console.log(res.data.clients);
      const clients = res.data.clients;
      // filteredNames: clients
      this.setState({ clients, filteredNames: clients });
      console.log(this.state.filteredNames);
    });
  }

  filterNames = nameFilter => {
    const clients = this.state.clients;
    let filteredNames = clients.filter(client => {
      let clientName = client.name.toLowerCase();
      return clientName.indexOf(nameFilter.toLowerCase()) !== -1;
    });
    this.setState({ filteredNames: filteredNames });
    console.log(filteredNames);
  };

  render() {
    return (
      <div>
        <NameFilter
          clients={this.state.filteredNames}
          match={this.props.match}
          onChange={this.filterNames}
        />
        <ul>
          {this.state.filteredNames.map(client => (
            <li key={client.id}>
              {client.name} <button>More Info</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
