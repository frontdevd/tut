import React from "react";
import Header from "./Header"
import Sidebar from "./Sidebar"
import Profile from "./Profile"

function App() {
  return (
    <>
      <Header/>
      <div className="wrapper">



        
        <Sidebar/>
        <Profile/>
      </div>
    </>
  )
}

export default App
