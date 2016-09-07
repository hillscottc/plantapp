import React from 'react'

export default class PlantsQueryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var text = this.state.text.trim();
    if (!text) {
      return;
    }
    this.props.onQuerySubmit({ text: text });
    this.setState({text: ''});
  }

  render() {
    return (
        <form className="queryForm" onSubmit={this.handleSubmit}>
          <input
              type="text"
              placeholder="Say something..."
              value={this.state.text}
              onChange={this.handleTextChange}
          />
          <input type="submit" value="Post" />
        </form>
    );
  }
}