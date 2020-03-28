import React, {Component} from 'react';
import MovieLists from './MovieLists';
import '../DisplayMovies.css';

class DisplayMovies extends Component{
  
  render(){
    const {users, movies, profiles, usersMovieFavorites}=this.props;
    return (
     <div>
      
         <ul className="movie-lists">
  		{
         
  		Object.keys(movies).map(key_index=>{
          
          return (
              <MovieLists key={key_index} users={users} movies={movies} usersMovieFavorite={usersMovieFavorites[key_index]} movieInfo={movies[key_index]} profiles={profiles} />
			
          );
        })
  	
  		}
		
  	</ul>
      </div>
    );
  
	}

}

export default DisplayMovies;