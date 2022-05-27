import React from 'react'
import "./style.css"

const SeachBar = ({value,handleSearchKey,clearSearch,formSubmit}) => {
  return (
    <div className='searchBar-wrap'>
        <form onSubmit={formSubmit}>
            <input 
            type="text" 
            onClick={handleSearchKey}placeholder='Search By Catagory' 
            value={value}
            onChange={handleSearchKey}
            />
            {value && <span onClick={clearSearch}>X</span>}
            <button>Go</button>
        </form>
    </div>
  )
}

export default SeachBar