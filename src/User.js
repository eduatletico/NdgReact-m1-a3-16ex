import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  static propTypes = {
    showGamesPlayed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }

  render () {
    return (
      <li>
        <p>{this.props.user.userName} played: {this.props.showGamesPlayed ? this.props.user.numGamesPlayed : '*'} games</p>
      </li>
    );
  }
}

export default User;