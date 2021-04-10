import './App.css';
import { useEffect, useState } from 'react';
import { fetchUsers } from './Requests/profile';
import { Route, Switch } from 'react-router-dom';
import Users from './Pages/UserPage';
import UserDetails from './Pages/UserDetailPage';
import Navbar from './Components/Navbar/Navbar'
import LoginScreen from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { SnackbarProvider, useSnackbar } from "notistack";
import HomePage from './Components/HomePage';
import SearchUsers from './Pages/SearchUsers';



function App() {

  

  return (
    <div className="App" >
      <SnackbarProvider
       anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
    }}
      >
       <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/users' component={Users}  />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact  path='/:id' component={UserDetails} />
          <Route path='/search/:keyword' component={SearchUsers} />
       </Switch>

      </SnackbarProvider>
    </div>
  );
}

export default App;
