import React from "react";
import { Provider } from 'react-redux';
import Routers from "./routers";
import store from "./store";

// Root Component for the applictaion
const App = () => {
  return (
    <Provider store = {store} >  {/* providing the global store of the application */}
      <Routers /> 
    </Provider>  
  );
}

export default App;
