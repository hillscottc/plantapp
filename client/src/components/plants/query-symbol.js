import React, { Component, PropTypes } from 'react';

class QuerySymbol extends Component {

  constructor(props) {
    super(props);
    this.state = {symbol: ''};
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    this.setState({ symbol: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var text = this.state.symbol.trim();
    if (!text) {
      return;
    }
    this.props.onQuerySubmit({ symbol: text });
    this.setState({symbol: ''});
  }

  render() {
    return (
        <form className="queryForm" onSubmit={this.handleSubmit}>
          <label>by Symbol</label>
          <input
              type="text"
              value={this.state.symbol}
              onChange={this.handleTextChange}
          />
          <input type="submit" value="Go" />
        </form>
    );
  }
}

QuerySymbol.propTypes = {
  onQuerySubmit: PropTypes.func.isRequired
};

export default QuerySymbol;