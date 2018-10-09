import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  state = {
    showGamesPlayed: true,
  };

  toggleGamesPlayedPanel = () => {
    this.setState(oldState => ({
      showGamesPlayed: !oldState.showGamesPlayed,
    }));
  };

  render () {
    const gamesPlayedButton = (
      <div>
        <button onClick={this.toggleGamesPlayedPanel}>
          {this.state.showGamesPlayed ? 'Hide ' : 'Show '}
          the Number of Games Played
        </button>
      </div>
    )
    
    return (
      <div>
       <h2>Users</h2>
       {this.props.users && this.props.users.length > 0 ? gamesPlayedButton : ''}
       <ol>
         {this.props.users.map(user => (
            <User key={user.userName} user={user} showGamesPlayed={this.state.showGamesPlayed} />
          ))}
       </ol>
      </div>
    );
  }
  
}

export default UserList;