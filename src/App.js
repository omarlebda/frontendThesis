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
import { useSelector } from 'react-redux';
import Loading from './Components/Loading/Loading';



function App() {

  const {isAuthenticated, saveValues} = useSelector(state => state.auth)
  const [users, setUsers] = useState(null);
  const [userId, setUserId] = useState(null)

  useEffect(()=>{
    if(!isAuthenticated) return;
    fetchUsers()
    .then(res => {
      setUsers(res)
    })
    .catch(err => console.log(err))
  },[isAuthenticated])

  useEffect(() =>{
    if(users?.length > 1){
      const userValues = users.find(user => user.username === saveValues)
      setUserId(userValues.id)
      console.log(userValues, 'va')
    }
  },[users])

console.log(saveValues, 'll')


  


  return (
    <div className="App" >
      <Navbar id={userId} />
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/:id' component={UserDetails} />
          <Route path='/search/:keyword' component={SearchUsers} />
        </Switch>

      </SnackbarProvider>
    </div>
  );
}

export default App;
