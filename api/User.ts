import axios from "axios";
import { base_url, headers } from "../App";



const getItem = (mobile_id: string) => {
    let endpoint = base_url+'/auth/'+mobile_id;
    
    let user = axios.get(endpoint,headers).then((response) => {
      if(response.status === 200){
          //console.log(response.data)
          return response.data;
          }
      else 
        return null;
    }).catch(error => (console.log("ciao "+error)));
    
    //console.log(user);
    if(user != null){
      return user;
    } else {
      return null
    }
  }