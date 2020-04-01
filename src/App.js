import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    textInput: "",
    userNames: []
  };




  handleChange = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const previousInput = this.state.textInput;

    // const { previ } = this.props;
    fetch(`https://api.github.com/users/${previousInput}`)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          userNames: [...this.state.userNames, result]
        });
        // console.log(result)
      });

  };




  render() {
    const { userNames } = this.state;
    console.log('This is inside render', userNames)
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Username:
            <input
              type="text"
              value={this.state.textInput}
              placeholder="Text Input"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {userNames.length > 0 ? (
          userNames.map(user => (
            <p>{user.name}</p>
          ))
        ) : (
            <li>No Data</li>
          )
        }
        <p>{userNames.name}</p>
      </div>
    );
  }
}

export default App;
