import React from "react";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

function Player ({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <Card style={{width: "18rem", backgroundColor: "#800000", color: "#fff"}}>
      <Card.Img variant="top" src={imageUrl} style={{width: "100%", height: "20rem", objectFit: "cover"}}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: "Unknown Number",
  age: "Unknown Age",
  imageUrl: "https://example.com/unknown.jpg",
};

export default Player;