import React from "react";

// Full Screen Loader
const Loader = () => (
  <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100vw', background:'#f7f7fa'}}>
      <div className="spinner-grow text-dark" role="status" style={{width: "7rem", height: "7rem"}}>
        <span className="sr-only">Loading...</span>
      </div>
   </div>
);

export default Loader;