
import React, { Component} from 'react';
import LexChatBot from "./LexChart";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class LexChatConfig extends Component {
  render() {
    
    return (
      <div className="scrollbar" >
        <LexChatBot botName="qc_sre"
                 IdentityPoolId="us-east-1:0df49fd7-b959-4355-bc85-10fa0206de30"
                 placeholder="Type Start/Stop/Instance Name "
                 style={{position: 'absolute'}}
                 backgroundColor="#F0FFFF"
                 height="500px"
                 region="us-east-1"
                 headerText="Please Ping me Here"
                  />
                 <ToastContainer autoClose={5000} 
                 position="top-center"/>
                     
                 </div>
    )
  }
}
export default LexChatConfig;