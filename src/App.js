import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/NotFound/NoFound';
import Book from './Components/User/Book/Book';
import Login from './Components/Login/Login';
import { useState } from 'react';
import { createContext } from 'react';
import BookingList from './Components/User/BookingList/BookingList';
import Review from './Components/User/Review/Review';
import AddService from './Components/Admin/AddService/AddService';
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';
import AllOrders from './Components/Admin/AllOrders/AllOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotAdmin from './Components/NotAdmin/NotAdmin';
import AdminsEmail from './Components/Admin/AdminsEmail/AdminsEmail';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [admin, setAdmin] = useState(false);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, admin, setAdmin]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/service/:id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/bookinglist">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            {admin ?
              <AddService></AddService>
              :
              <NotAdmin></NotAdmin>
            }
          </PrivateRoute>
          <PrivateRoute path="/addAmdin">
          {admin ?
              <AddAdmin></AddAdmin>
              :
              <NotAdmin></NotAdmin>
            }
          </PrivateRoute>
          <PrivateRoute path="/allOrders">
          {admin ?
              <AllOrders></AllOrders>
              :
              <NotAdmin></NotAdmin>
            }
          </PrivateRoute>
          <PrivateRoute path="/adminsEmail">
          {admin ?
              <AdminsEmail></AdminsEmail>
              :
              <NotAdmin></NotAdmin>
            }
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
