import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import {Button,Modal} from 'react-bootstrap';

export default class Upadateacessrole extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      show:false,
      value:'SuperAdmin'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    
    event.preventDefault();
    axios.put(`http://localhost:3006/api/v1/user/${this.props.uid}`,{
           acessrole:this.state.value,
    }).then(
      alert("Acess role Sucessfuly Upadated Of User"+this.props.email)
      
    )
  }
  handleonclick=()=>
  {
    this.setState({show:!this.state.show})
  }
  render() {
    return (
      <div>
        <Button onClick={()=>{this.handleonclick()}}>Update</Button>
        <Modal
        show ={this.state.show}>
        <Modal.Header><b>Edit User Acess Role</b></Modal.Header>
        <Modal.Body>
        <form onSubmit={this.handleSubmit}>
        <label>
           <b>{this.props.email} :</b>  
           <select value={this.state.value} onChange={this.handleChange}>
            <option value="SuperAdmin">SuperAdmin</option>
            <option value="Admin">Admin</option>
            <option value="IT">IT</option>
            <option value="AppSupprot">AppSupport</option>
          </select>
        </label>
        
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{this.handleonclick()}}>
            Close
          </Button>
          <Button onClick={this.handleSubmit}>
             Save
          </Button>
        </Modal.Footer>




        </Modal>
      </div>
    )
  }
}
