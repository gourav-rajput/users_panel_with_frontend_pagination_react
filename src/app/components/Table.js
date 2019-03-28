import React, { useState, useEffect, Fragment } from "react";

const Table = ({ usersList, query, viewUser, entitiesPerPage }) => {

  // Settting up the initial state of component
  const [listToRender, setListToRender] = useState([...usersList]); 
  const [sortedBy, setSortedBy] = useState("");

  // Run if usersList or query changes
  useEffect(() => {
    if (query !== "" || listToRender.length < entitiesPerPage) {
      let newList = usersList.filter(user => {
        return (user.first_name.toLowerCase()).indexOf(query.toLowerCase()) > -1
      });
      setListToRender([...newList]);
    }
  }, [query, usersList]);

  // Acccepts string value to sort the userList
  const sortList = sortBy => { 
    let newList = [];
    if (sortBy === "age") {
      newList = listToRender.sort((obj1, obj2) => {
        return obj1.age - obj2.age
      });
    } else{
      newList = listToRender.sort((obj1, obj2) => {
        let firstValue=obj1[sortBy].toLowerCase(), secondValue=obj2[sortBy].toLowerCase()
        if (firstValue < secondValue) 
          return -1 
        if (firstValue > secondValue)
          return 1
        return 0 
      })
    }
    setListToRender([...newList]);
    setSortedBy(sortBy);
  }

  // Return JSX to display Table Head
  const renderTableHead = (name, sortBy = "") => (
    <Fragment>
      <th>{name}
        {  
          sortBy !== "" ?
            sortBy !== sortedBy ? 
              <button className="badge badge-primary badge-pill" onClick={() => sortList(sortBy)}>sort</button>
            :  
              <span className="badge badge-primary badge-pill" style={{marginLeft:10}}>Sorted</span>  
          :
            null
        }
      </th>
    </Fragment>
  )
  return(
    <div className="table-responsive">
      {
        listToRender.length ? 
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                {renderTableHead("index")}
                {renderTableHead("First Name", "first_name")}
                {renderTableHead("last Name", "last_name")}
                {renderTableHead("Age", "age")}
                {renderTableHead("Company Name", "company_name")}
              </tr>
            </thead>
            <tbody>
              {
                listToRender.map((user, index) => (
                  <tr key={index} onClick={() => viewUser(user)} >
                    <td>{++index}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.age}</td>
                    <td>{user.company_name}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>      
        :
          <h2>No Search Results</h2>
      }  
    </div>
  )
} 

export default Table;