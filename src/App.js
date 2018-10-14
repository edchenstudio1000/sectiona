import React, { Component } from 'react';

import './App.css';
import TopNav from './topnav';



const APID = 'https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?';

class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users:[],
      usersb:[],
      varapi:APID,
      
    };

}

componentDidMount() {
  fetch(this.state.varapi)
 .then(res => res.json())
 .then(
   (result) => {
     this.setState({ 
       isLoaded:true,
       users:result.users,//givers array
      usersb:function(){//receivers array
        //this is the way to range and two arrays 
        //receivers and givers in order to make it work
              var lastuser = result.users.pop();
              result.users.unshift(lastuser);
              return result.users;
      }
    });
},
(error) => {
  this.setState({
      isLoaded:true,
      error
  });

}
)

}
render() {
  const { error, isLoaded, users, usersb } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
       <div className="App">
        <header className="App-header">  </header>
        <nav>
        <div className="container">
       <h2>Coffee Week</h2></div>
        </nav>
        <div id="main">
        <div className="floatleft">
        <span>
       <h4>All Users</h4></span>
      <ul id="ul_alll">
        {
            this.state.users.map(user => (
          <li key={user.guid}>
           {user.name.first}  {user.name.last}<br/>{user.location} {user.department}
          </li>
        ))
        }
      </ul>
      </div>
      <div> 
      <TopNav/> 
      </div>                                                                                
      </div>
    </div>
    );
  }
}
}


export default App;
