import React from "react";
import Nav from "./components/navbar";
import Snowman from "./components/snowman"
import Form from "./components/form"
import Tail from "./components/tailtemplate"
function App() {
  return (
    <>
      <Nav />
        <div className= "text-center text-6xl bg-blue-600 p-40 text-white">
    
          Impact Everything
        </div>

      <Snowman />
      <Tail/>

    
    </>
  );
}

export default App;
