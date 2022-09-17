import React from 'react'

export const MovieList = (props) => {
  return (
    <div className='d-flex justify-content-start m-3'>
        {props.movies.map((movie, index) => 
            <img src={movie.Poster} ></img>
        )}
    </div>
  )
}
