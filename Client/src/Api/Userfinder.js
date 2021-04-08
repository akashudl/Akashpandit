  
import axios from "axios";

export default axios.create({
  baseURL: "http://172.16.7.249:3006/api/v1/user",
});
