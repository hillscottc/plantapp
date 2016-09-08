import React, { Component, PropTypes } from 'react';

class QueryForm extends Component {

  constructor(props) {
    super(props);
    this.state = {queryVal: ''};
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    this.setState({ queryVal: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const queryVal = this.state.queryVal.trim();
    if (!queryVal) {
      return;
    }
    this.props.onQuerySubmit({ queryVal: queryVal }, this.props.queryType);
    this.setState({queryVal: ''});
  }

  render() {
    const {queryType} = this.props;
    const {queryVal} = this.state;
    return (
        <form className="queryForm" onSubmit={this.handleSubmit}>
          <label>by {queryType}</label>
          <input
              type="text"
              value={queryVal}
              onChange={this.handleTextChange}
          />
          <input type="submit" value="Go" />
        </form>
    );
  }
}

QueryForm.propTypes = {
  onQuerySubmit: PropTypes.func.isRequired,
  queryType: PropTypes.string.isRequired
};

export default QueryForm;