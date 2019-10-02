import React from 'react';
import axios from 'axios';

import UserCard from "./components/UserCard";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      users: {},
      followers: []
    });
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/OlgaCortez')
    .then(res => this.setState({users: res.data}));

    axios
    .get('https://api.github.com/users/OlgaCortez/followers')
    .then(res => this.setState({followers: res.data}));
 
  }
  

  render() {
  return (
    <div className="App">
      <h1>React Github React Card</h1>
      <UserCard users={this.state.users} followers={this.state.followers} />
    </div>
    );
  }
}

export default App;
