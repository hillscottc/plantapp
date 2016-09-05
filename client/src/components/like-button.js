import React from 'react'


export default class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({liked: !this.state.liked});
  }

  render() {
    const text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
        <p onClick={this.handleClick}>
          You {text} this. Click to toggle.
        </p>
    );
  }
}
