import React, { Component } from 'react';

import './App.css';


//import GiversReceivers_list from './users_nj';
                                                                                           
//import Newyorkgivers from 'Newyorkgivers';
//import Newyorkreceivers from 'Newyorkreceivers';
//import Dubgivers from 'Dubgivers';
//import Dubreceivers from 'Dubreceivers';

const APIB = 'https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?department=engineering&location=dub';

class Appclassdub  extends Component {

constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users:[],
      usersb:[],
      varapi:APIB,
      
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
        <nav><div className="container">
       <h4>DUB Givers && Receiver</h4></div>
        </nav>
        <div id="main">
        <div className="floatleft">
        
      <ul id="ul_alll"><div>DUB Users</div>
        {
            this.state.users.map(user => (
          <li key={user.guid}>
           {user.name.first}  {user.name.last}<br/>{user.location} {user.department}
          </li>
        ))
        }
      </ul>
      </div>
      <div className="floatleft"> 
      <table>
        <tr className="background_colorPine">   
          <td><div>Givers</div>
          <ul id="ul_alll">
        {       
          this.state.usersb().map(user => (
          <li key={user.guid}>
           {user.name.first}  {user.name.last}
          </li>
        ))
        }
      </ul>
    </td>
    <td><div>Receivers</div>
          <ul id="ul_alll">
        {this.state.usersb().map(user => (
          <li key={user.guid}>
           {user.name.first} {user.name.last} 
          </li>
        ))}
      </ul>
          </td>    
      </tr></table>
      </div>                                                                                
      </div>
    </div>
    );
  }
}
}


export default Appclassdub;
