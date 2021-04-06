import React, { Component } from 'react'
//import {db,auth} from "../Services/firebase";
import "../bootstrap.css";
//import Userfinder from '../Api/Userfinder';
import axios from 'axios';
import Footer from "./Footer";
import Upadateacessrole from "./Upadateacessrole";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthenticationService from "../Services/AuthenticationService";


export default class CommandsAvailable extends Component {
    state ={
        userInfo:[],
        count:0,
  
      }
       
      componentDidMount() 
      { 
       
       axios.get("http://localhost:3006/api/v1/commanddetails").then(response=>{
         this.setState({userInfo:response.data.data.user})
         console.log(response);
        });
  
      }
    
      render() {
         const Adminrole=AuthenticationService.getroletrueorfalse();
          return (
            <>
            <div className="container">
             
            <table className="table table-hover  table-dark mt-4 text-center mx-auto w-50 ">
              <thead>
                <tr className="bg-primary">
                  <th scope="col">AcessRole</th>
                  <th scope="col">Bot_Commands</th>
                  <th scope="col">Active</th>
                  <th scope="col">Cretaed_on</th>
   
                 
                </tr>
              </thead>
              <tbody>
              {this.state.userInfo &&
            this.state.userInfo.map((user) => {
                return (
                  <tr
                
                    key={user.srno}
                  >
                    <td>{user.acessrole_code}</td>
                    <td>{user.botcommands}</td>
                    <td>{user.active}</td>
                    <td>{user.createdt}</td>
                  
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>
         
          </>
          );
      }
  }
  