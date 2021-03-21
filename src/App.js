import './App.css';
import { useEffect, useState } from 'react';
import { fetchUsers } from './Requests/profile';
import { Route, Switch } from 'react-router-dom';
import Users from './Pages/UserPage';
import UserDetails from './Pages/UserDetailPage';


function App() {

  

  return (
    <div className="App" >
       <Switch>
          <Route exact path='/' component={Users} />
          <Route  path='/:id' component={UserDetails} />
       </Switch>
    </div>
  );
}

export default App;
