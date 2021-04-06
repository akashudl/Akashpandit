import React, { Component } from 'react'
import axios from 'axios';
export default class CheckLogsComponent extends Component {
    state ={
        userInfo:[],
        count:0,
  
      }
       
      componentDidMount() 
      { 
       
       axios.get("http://172.16.7.249:3006/api/v1/userchatdetails").then(response=>{
         this.setState({userInfo:response.data.data.user})
         console.log(response);
        });
  
      }
    
      render() {
        
          return (
            <>
            <div className="table-responsive-sm">
             
            <table className="table table-hover  table-dark mt-4 text-center mx-auto w-100 table-bordered">
              <thead>
                <tr className="bg-primary">
                  <th scope="col">Email</th>
                  <th scope="col">AcessRole</th>
                  <th scope="col">Command_Typed</th>
                  <th scope="col">Response</th>
                  <th scope="col">chat_time</th>
                 
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
                    <td>{user.command_typed}</td>
                    <td>{user.response_got}</td>
                    <td>{user.chat_time}</td>
               
                  
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
  
