import React from "react";
import PlayersList from "./PlayersList";
import "./App.css"
const style = { textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}
const newstyle= { color: "white", marginBottom: "2em", fontWeight: "bolder", marginTop: "30px"}
function App () {
  return (
    <div className="Inner" style={style}>
      <h1 style={newstyle}>Football Players App</h1>
      <PlayersList />
    </div>
  );
};
export default App;
