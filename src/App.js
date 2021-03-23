import './App.css';
import { useEffect, useState } from 'react';
import { fetchUsers } from './Requests/profile';
import { Route, Switch } from 'react-router-dom';
import Users from './Pages/UserPage';
import UserDetails from './Pages/UserDetailPage';
import Navbar from './Components/Navbar/Navbar'

function App() {

  

  return (
    <div className="App" >
      <Navbar></Navbar>
       <Switch>
          <Route exact path='/' component={Users} />
          <Route  path='/:id' component={UserDetails} />
       </Switch>
    </div>
  );
}

export default App;
