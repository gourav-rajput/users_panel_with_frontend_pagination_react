import React from "react";

// Rendering Search Input field for only Home component on basis of "searchVisible" value 
const Header = ({ onSearch, searchVisible = true }) => {
  return(
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <span className="navbar-brand col-sm-3 col-md-2 mr-0">Company name</span> 
      {
        searchVisible &&                                     
          <input 
            className="form-control form-control-dark w-100" 
            onChange={event => onSearch(event.target.value)} 
            type="text" 
            placeholder="Search By Name" 
            aria-label="Search" 
          />
      }
    </nav>
  )
}

export default Header;