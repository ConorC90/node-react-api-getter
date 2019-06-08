import React, { Component } from "react";

class ClientInfo extends Component {
  constructor() {
    super();
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

  render() {
    return (
      <div>
        <p>place holder</p>
      </div>
    );
  }
}

export default ClientInfo;
