import React from "react";
import Player from "./Player";
import players from "./Players";
import "./App.css"

const PlayersList = () => {
  return (
    <div style={{  }} className="container">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;