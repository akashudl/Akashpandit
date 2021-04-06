class AuthenticationService
{
   registerSucessfullLogin(username,photourl,role)
   {
       console.log("RegisterSuceffsul Login")
       sessionStorage.setItem('autheticatedUser',username);
       sessionStorage.setItem('autheticatedUserPhoto',photourl);
       sessionStorage.setItem('autheticatedUserRole',role);
   }
   getcountuser(getcount)
   {
       sessionStorage.setItem('getcountuser',getcount);
   }
   getusercount()
   {
       let count=sessionStorage.getItem('getcountuser')
       return count;
   }
   logout()
   {
    sessionStorage.removeItem('autheticatedUser');
    sessionStorage.removeItem('autheticatedUserPhoto');
    sessionStorage.removeItem('autheticatedUserRole');
    sessionStorage.removeItem('getcountuser')
   }
  
   isUserloggedin()
   {
       let user=sessionStorage.getItem('autheticatedUser');
       if(user===null)
       return false;
       else
       return true;
   }
   isUserAdmin()
   {
    let user=sessionStorage.getItem('autheticatedUser');
    let role=sessionStorage.getItem('autheticatedUserRole')
    if(role!=null)
    {
        var nameArr = role.split(',');
        var res = nameArr[0];
        var res1=nameArr[1];
        var res2=nameArr[2];
        var res3=nameArr[3];
        var res4=nameArr[4];
    if((res1==="SuperAdmin"||res2==="SuperAdmin"||res3==="SuperAdmin"||res==="SuperAdmin"||res4==="SuperAdmin")||(res1==="Admin"||res2==="Admin"||res3==="Admin"||res==="Admin"||res4==="Admin")&&user!=null)
    { 
        return  true;

    }
    else 
    return false ;
   }
}
   isUserSuperAdmin()
   {
    let role=sessionStorage.getItem('autheticatedUserRole')
    if(role!=null)
    {   
        var nameArr = role.split(',');
        var res = nameArr[0];
        var res1=nameArr[1];
        var res2=nameArr[2];
        var res3=nameArr[3];
        var res4=nameArr[4];
        if(res1==="SuperAdmin"||res2==="SuperAdmin"||res3==="SuperAdmin"||res==="SuperAdmin"||res4==="SuperAdmin")
        return true
        else 
        return false;
    }
   }
   getuser()
   {
       let user=sessionStorage.getItem('autheticatedUser')
        if(user!=null)
         return user; 
   }
   getRole()
   {
       let role=sessionStorage.getItem('autheticatedUserRole')
       return role;
   }
   getroletrueorfalse()
   {
    let role=sessionStorage.getItem('autheticatedUserRole')
    if(role==='SuperAdmin'||role==='Admin')
     return true;
     else 
     return false;
   }
   getphotoUrl()
   {
       let userPhoto=sessionStorage.getItem('autheticatedUserPhoto')
       if(userPhoto!=null)
         return userPhoto;
   }
   getuser1()
   {
    let user=sessionStorage.getItem('autheticatedUser')
      return user;
      
   }
}
export default new  AuthenticationService();