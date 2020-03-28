import React, {Component} from 'react';

class UserLists extends Component{
  
 render(){
   
   const {users, usersMovieFavorite}=this.props;
   let outputUsers=null;
   if(usersMovieFavorite && usersMovieFavorite.length>0){
     outputUsers=<ul>
    	{usersMovieFavorite.map(user_id=>{
            	return (
                <li key={user_id} className="user-list-item">
                  {users[user_id].name}
            	</li>
                )
          	})
		}
            
       </ul>
   }else{
     outputUsers=<p className="no-favorite-user">None of the current users liked this movie</p>
     
   }
   
   return outputUsers;
   
 
   
 }
  
  
}


export default UserLists;