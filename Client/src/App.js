import React, {Component} from 'react';
import './App.css';
import "./Welcome.css";
//import "./Colarib.css";
//import  LoginComponent from "./Components/LoginComponent";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
//import GoogleapiSignin from "./Components/GoogleapiSignin";
import GoogleLogin from "./Components/Googlelogin";
import  Welcome from "./Components/Welcome";
//import ChatbotComponet from "./Components/ChatbotComponet";
import ErrorComponent from "./Components/ErrorComponent";
import AuthorizedLogin from "./Components/AuthorizedLoging";
import HeaderComponent from "./Components/HeaderComponent";
import "./bootstrap.css";
import Authenticatedroute from "./Components/Authenticatedroute";
import LogoutComponent from "./Components/Logoutcomponet";
import LexChatConfig from  "./Components/LexChartConfig";
//import HeadeNew from "./Components/HeadeNew";
//import Footer from "./Components/Footer";
import Admin from "./Components/Admin";
//import Navbar from "./Components/Navbar";
//import Login from "./Components/LoginCom"
import UserAdmin from "./Components/Useradmin";
import CheckLogsComponent from "./Components/CheckLogsComponent";
import  {UserContextProvider} from "./Contexapi/UserContexapi";
import CretaeCommandReques from "./Components/CretaeCommandReques";
class App extends Component
{ 
  render()
  {
  return (
    <UserContextProvider>
     <div className="App">
      <Router>
      <> 
        <HeaderComponent/>
      <Switch>
        <Route path="/" exact component={GoogleLogin}/>
        <Route path="/Login" component={GoogleLogin}/>
        <Authenticatedroute path="/Welcome/:dispalyname" component={Welcome}/>
        <Authenticatedroute path="/Chatbot" component={LexChatConfig}/>
        <UserAdmin path="/admin" component={Admin}/>
        <UserAdmin path="/logs" component={CheckLogsComponent}/>
        <UserAdmin path="/Command" component={CretaeCommandReques}/>
        <Authenticatedroute path="/logout" component={LogoutComponent}/>
        <Route path="/auth" component={AuthorizedLogin}/>
        <Route  component={ErrorComponent}/>
        
        </Switch>
   
        </>
        </Router>     
    </div>
    <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
    </div>
    </UserContextProvider>
    
  );
  }
}

export default App;
