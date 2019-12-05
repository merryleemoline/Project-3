import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import FrontCard from '../FrontCard';
import BackCard from '../BackCard';


class WholeCard extends Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <FrontCard>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </FrontCard>
 
        <BackCard>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </BackCard>
      </ReactCardFlip>
    )
  }
}
  export default WholeCard;