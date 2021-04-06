import React, { Component } from 'react';
import "../bootstrap.css";
import axios from 'axios';
import CommandsAvailable from "../Components/CommandsAvailable";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Footer";
import AuthenticationService from "../Services/AuthenticationService"
import 'react-toastify/dist/ReactToastify.css';
export default class CretaeCommandReques extends Component {
    state ={
        acessrole:"Db",
        botcommands:"",
        Active:"Y",
        count:0,
  
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
        axios.post("http://172.16.7.249:3006/api/v1/usercommand",{
            acessrole_code:this.state.acessrole,
            botcommands:this.state.botcommands,
            active:this.state.Active
           })
           toast.success("Data Submited")

      }
    render() {
        const SuperAdmin=AuthenticationService.isUserSuperAdmin();
       
        return (
        <>
            {SuperAdmin&&<div className="container">
                <form action="">
                    <div className="form-row mt-5">
                    <div className="col ">
                    <select value={this.state.acessrole} 
                     onChange={this.handlevent}
                   className="custom-select"
                   name ="acessrole">

                        <option value="Db">Db</option>
                        <option value="Appsupport">Appsupport</option>
                        <option value="It">It</option>
                        <option value="Admin">Admin</option>
                        <option value="Superadmin">SuperAdmin</option>
                    </select>

                    </div>
                    <div className="col">
                    <input type="text" value={this.state.botcommands} name ="botcommands" onChange={this.handlevent} className="form-control" placeholder="BotCommands"></input>
                    </div>
                    <div className="col">
                    <select 
                     value={this.state.Active}
                     onChange={this.handlevent}
                     name ="Active"
                    className="custom-select">
                        <option value="Y">Y</option>
                        <option value="N">N</option>
                    </select>
                    </div>
                    <button className="btn btn-primary" onClick={this.submitdata}>ADD</button>
                    </div>
                </form>
                
            </div>}

            <CommandsAvailable/>
            <ToastContainer autoClose={2000}/>
            
            </>
        )
    }
}
