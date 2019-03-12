import React, { Component } from 'react';
import { inject, observer, PropTypes } from 'mobx-react';

@inject('BirdStore')
@observer
class HelloWorld extends Component {
  render() {
    const { BirdStore } = this.props;

    return (
      <div>
        <h2>You have {BirdStore.birdCount} birds</h2>
        <ul>
          {BirdStore.birds.map(bird => (
            <li key={bird}>{bird}</li>
          ))}
        </ul>
      </div>
    );
  }
}
HelloWorld.propTypes = {
  BirdStore: PropTypes.observableArray,
};

export default HelloWorld;
