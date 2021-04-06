import React, { Component } from 'react'
import "../bootstrap.css"
import {Link} from "react-router-dom";
import AuthenticationService from "../Services/AuthenticationService"
import { withRouter } from 'react-router';
import {Avatar} from "@material-ui/core";
import {Dropdown} from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
//import firebase from "../Services/firebase.js";
//import auth from "../Services/firebase.js";

class HeaderComponent extends Component {
  constructor(props)
  {  super(props)   
    this.state={
     userInfo:null,
  }
    
  
  }


    render() {
       const isUserloggedIN=AuthenticationService.isUserloggedin();
       const isUserAdmin=AuthenticationService.isUserAdmin();
       const getPhoto=AuthenticationService.getphotoUrl();
       console.log(getPhoto);
        return (
          
            <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
       <div className="navbar-brand"></div>
       <ul className="navbar-nav">
         {isUserloggedIN&& 
         <Dropdown>
         <Dropdown.Toggle variant="btn btn-light mr-1" id="dropdown-basic">
        <Link to="/Welcome/-----"><AiIcons.AiOutlineMenu/></Link>
         </Dropdown.Toggle>
       
         <Dropdown.Menu className="bg-light">
           <Dropdown.Item eventKey="3"><Link to="/Chatbot">Chatbot</Link></Dropdown.Item>
           {isUserAdmin && <Dropdown.Item eventKey="3"><Link to="/admin">Admin</Link></Dropdown.Item>}
           {isUserAdmin && <Dropdown.Item eventKey="3" ><Link to="/logs">Logs</Link></Dropdown.Item>}
           {isUserAdmin && <Dropdown.Item eventKey="3" ><Link to="/Command">Create Command</Link></Dropdown.Item>}
         </Dropdown.Menu>
       </Dropdown>}
        
                   </ul>
         <ul className="navbar-nav navbar-collapse justify-content-end">
         {! isUserloggedIN && <li className="nav-link"><Link to="/login">Login</Link></li>}
         {isUserloggedIN && <button  type="button" className="btn btn-light mr-1"  onClick={AuthenticationService.logout}><Link to="/logout">Logout</Link></button>}
         {isUserloggedIN&& <Avatar src={getPhoto} ></Avatar>}
         </ul >
        </nav>
      </header>
        )
    }
}

export default withRouter(HeaderComponent);
/*isUserloggedIN &&<button  type="button" className="btn btn-light mr-1"><Link to="/Chatbot">Chatbot</Link></button>*}
//isUserAdmin && <button  type="button" className="btn btn-light mr-1"><Link to="/admin">Admin</Link></button>*}
//isUserAdmin && <button  type="button" className="btn btn-light mr-1"><Link to="/logs">Logs</Link></button>*/