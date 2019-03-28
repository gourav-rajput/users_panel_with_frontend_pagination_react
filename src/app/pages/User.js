import React, { Fragment } from "react";
import { Header } from "../components";

const User = props => {

   let user = props.location.data ? props.location.data.user : "";
   if (user === "") { // Switch to home route if the user data is not available
     window.location = "/";
   }
   
   let { age, city, company_name, first_name, id, last_name, web, zip } = user;
  return(
    <Fragment>
      <Header searchVisible={false} />
      <main role="main" style={{marginTop:"50px"}} className="col-md-9 offset-md-1">
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            age
            <span className="badge badge-primary badge-pill">{age}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            city
            <span className="badge badge-primary badge-pill">{city}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            company name
            <span className="badge badge-primary badge-pill">{company_name}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            first name
            <span className="badge badge-primary badge-pill">{first_name}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            id
            <span className="badge badge-primary badge-pill">{id}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            last name
            <span className="badge badge-primary badge-pill">{last_name}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            web
            <span className="badge badge-primary badge-pill">{web}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            zip
            <span className="badge badge-primary badge-pill">{zip}</span>
          </li>
        </ul>
      </main>  
    </Fragment>
  )
}

export default User;
