
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { MovieList } from './Components/MovieList';
import { MovieListHeading } from './Components/MovieListHeading';
import { SearchBox } from './Components/SearchBox';


export default function App() {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("Avengers")

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=69a8d40d`
    const response =  await fetch(url)
    const responseJson = await response.json();

    if (responseJson.Search){
      setMovies(responseJson.Search)
    }

  }


  useEffect(() => {
    getMovieRequest();
  }, [searchValue])

  return (
    <div className='container-fluid movie-app'>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={searchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies}/>
      </div>
    </div>
  )
}
