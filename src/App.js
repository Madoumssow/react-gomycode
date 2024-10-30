import './App.css';
import React from 'react';
import Name from './Component/Name';
import Price from './Component/Price';
import Description from './Component/Description';
import Image from './Component/Image';
import { Card } from 'react-bootstrap';
import images from './images/zeus.JPG';

function App() {
  const firstName = "Thierno Mamoudou Sow";
  return (
    <div className="App" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      gap: "20px", // Espace entre les éléments
    }}
    >
      <Card style={{ width: '18rem', margin: "auto" }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        {firstName ? `Bonjour, ${firstName}` : "Bonjour !"}
      </p>
      {firstName && (
        <img src={images} alt="profile" style={{ display: 'block', margin: '10px auto' }} />
      )}
    </div>
  );
}

export default App;
