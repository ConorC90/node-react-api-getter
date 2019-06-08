import React, { Component } from "react";

class Namefilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: ""
    };
  }
  handleChange = e => {
    this.setState({
      nameFilter: e.target.value
    });
    this.props.onChange(e.target.value);
    // this.props.onChange(this.state.nameFilter);
  };

  render() {
    return (
      <div className="cities-filter">
        <p>Search our clients by name:</p>
        <input
          type="text"
          placeholder="Search by city name"
          className="form-control"
          value={this.state.nameFilter}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Namefilter;
