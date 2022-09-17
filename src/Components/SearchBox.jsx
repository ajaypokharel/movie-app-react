import React from 'react'

export const SearchBox = (props, event) => {
  return (
    <div className="col col-sm-4">
        <input className='form-control' 
        placeholder='Type to Search' 
        value={props.value} 
        onChange={() => props.setSearchValue(event.target.value)}
        ></input>
    </div>
  )
}
