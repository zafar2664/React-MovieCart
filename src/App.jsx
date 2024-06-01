import MovieCard from "./MovieCard"
import {movies} from "./movie"
import "./App.css"

function App(){
  return (
    <>
      <div className="wrapper">
         <h1>Movie Cart</h1>
         <div className="movie-container">
         {movies.map((movies,index)=><MovieCard key={index} ImageUrl={movies.image_url} MovieName={movies.movie_name} ReleaseYear={movies.release_year} Duration={movies.duration} 
         Description={movies.description} MadeBy={movies.made_by} Genres={movies.genres}/>)}
         </div>
      </div>
    </>
  )
}
export default App;