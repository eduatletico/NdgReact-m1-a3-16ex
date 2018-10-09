import React, { Component } from 'react';

class AddUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: ''
  }

  handleChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };
  handleChangeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };
  handleChangeUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  formIsEmpty = () => {
    return this.state.firstName === '' || this.state.lastName === '' || this.state.userName === '' ;
  };

  addUser = (event) => {
    event.preventDefault();
    let userExists = false;
    this.props.users.map((user) => {
      if (user.userName === this.state.userName) {
        userExists = true;
      }
      return user;
    });
    if (!userExists) {
      this.props.onAddUser(this.state);
      this.setState({ 
        firstName: '',
        lastName: '',
        userName: ''
      });
    } else {
      alert("User already exists!");
    }
  };

  render () {
    return (
      <div>
       <h2>New User</h2>
      	<form onSubmit={this.addUser}>
          <input
            type="text"
            placeholder="Enter The First Name"
    		value={this.state.firstName}
    		onChange={this.handleChangeFirstName}
          /><br />
		  <input
            type="text"
            placeholder="Enter The Last Name"
			value={this.state.lastName}
   			onChange={this.handleChangeLastName}
          /><br />
		  <input
            type="text"
            placeholder="Enter The Username"
			value={this.state.userName}
            onChange={this.handleChangeUserName}
          /><br />
          <button disabled={this.formIsEmpty()}>Add</button>
        </form>
      </div>
    );
  }
  
}

export default AddUser;