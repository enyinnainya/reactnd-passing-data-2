import React, {Component} from 'react';
import UserLists from "./UserLists";

class MovieLists extends Component{
  
 	render(){
      const {users, movies, profiles, movieInfo, usersMovieFavorite}=this.props;
     return (
     	<li key={movieInfo.id} className="movie-lists-item">
			<h2>{movieInfo.name}</h2>
			<h4>Liked By:</h4>
			<UserLists usersMovieFavorite={usersMovieFavorite} users={users} />
		</li>
     ); 
    }
  
  
}

export default MovieLists;