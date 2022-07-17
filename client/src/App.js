import React from 'react';
import {BrowserRouter, Route,Routes, Navigate} from "react-router-dom";
import {Provider} from 'react-redux';
import "./main.scss";
import Home from './components/Home';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/Navbar";
import Dashboard from './components/Dashboard';
import PrivateRoute from './private/PrivateRoute';
import NotFound from './components/NotFound';
import Create from './components/Create';
import Edit from './components/Edit';
import Store from'./store';
import UpdateName from './components/UpdateName';
import EditImage from './components/EditImage';
import ChangePassword from './components/ChangePassword';
import Details from './components/Details';
function App() {
  return (
    <Provider store={Store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/home/:page" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard/:page" element={
      <PrivateRoute>
      <Dashboard/>
      </PrivateRoute>
    }/>
    <Route path="/create" element={
      <PrivateRoute>
      <Create/>
      </PrivateRoute>
    }/>
    <Route path="/edit/:id" element={
      <PrivateRoute>
      <Edit/>
      </PrivateRoute>
    }/>
    <Route path="/updateImage/:id" element={
      <PrivateRoute>
      <EditImage/>
      </PrivateRoute>
    }/>
    <Route path="/updateName" element={
      <PrivateRoute>
      <UpdateName/>
      </PrivateRoute>
    }/>
    <Route path="/updatePassword" element={
      <PrivateRoute>
      <ChangePassword/>
      </PrivateRoute>
    }/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
