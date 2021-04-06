import React, { Component } from 'react'
//import {db,auth} from "../Services/firebase";
import "../bootstrap.css";
//import Userfinder from '../Api/Userfinder';
import axios from 'axios';
import Footer from "./Footer";
import Upadateacessrole from "./Upadateacessrole";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthenticationService from "../Services/AuthenticationService"
//import { Button } from 'react-bootstrap';
export default class Admin extends Component {
    state ={
      email:"",
      acessrole:"Db",

    }
     
    componentDidMount() 
    { 
     
     axios.get("http://localhost:3006/api/v1/userdetails").then(response=>{
       this.setState({userInfo:response.data.data.user})
       console.log(response);
      });

    }
    handlevent=(event)=>
    {
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        );
    }
    submitdata=()=>
    {
      axios.post("http://localhost:3006/api/v1/createuser",{
          email:this.state.email,
          acessrole:this.state.acessrole
         })
         toast.success("User Created")


    }
    render() {
       const Adminrole=AuthenticationService.isUserSuperAdmin();
        return (
          <>
          {Adminrole&& <div className="container">
                <form action="">
                    <div className="form-row mt-5">
                    <div className="col ">
                    <input type="text" value={this.state.botcommands} name ="email" onChange={this.handlevent} className="form-control" placeholder="Enter the Email-Id"></input>

                    </div>
                    
                    <div className="col">
                    <select 
                     value={this.state.Active}
                     onChange={this.handlevent}
                     name ="acessrole"
                    className="custom-select">
                        <option value="Db">Db</option>
                        <option value="Appsupport">Appsupport</option>
                        <option value="It">It</option>
                        <option value="Admin">Admin</option>
                        <option value="SuperAdmin">SuperAdmin</option>
                    </select>
                    </div>
                    <button className="btn btn-primary" onClick={this.submitdata}>Create User</button>
                    </div>
                </form>
                <ToastContainer autoClose={5000} 
                 position="top-center"
                 closeOnClickrtl={false}/>
            </div>}

          <div className="table-responsive">
           
          <table className="table table-hover  table-dark mt-4 text-center mx-auto w-50 ">
            <thead>
              <tr className="bg-primary">
                <th scope="col">Email</th>
                <th scope="col">AcessRole</th>
                <th scope="col">Login Time</th>
                
 
               
              </tr>
            </thead>
            <tbody>
            {this.state.userInfo &&
          this.state.userInfo.map((user) => {
              return (
                <tr
              
                  key={user.uid}
                >
                  <td>{user.email}</td>
                  <td>{user.acessrole}</td>
                  <td>{user.created_on}</td>
                  
                
                
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
