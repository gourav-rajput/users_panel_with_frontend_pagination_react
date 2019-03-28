import React, { Fragment } from "react";

// Navbar for displaying content info of screen
const Navbar = () => {
  return(
    <Fragment>
      <div className="container-fluid" style={{marginTop: '30px'}}>
        <div className="row">
          <main role="main" className="col-md-9 offset-md-1">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <h2>All Users</h2>
          </main>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar;