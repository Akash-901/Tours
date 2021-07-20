import './App.css';
import React, { useState, useEffect } from 'react';
import Tours from './Tours';

function App() {

  const [tour, setTour] = useState([]);

  useEffect(() => {
    fetchTour();
  }, []);

  const fetchTour = async () => {
    const response = await fetch("https://course-api.com/react-tours-project");
    const data = await response.json();
    console.log(data);
    setTour(data);
  };

  const removeTour = (id) => {
    const newTour = tour.filter((newtours) => newtours.id !== id);
    setTour(newTour);
  }
  if (tour.length === 0) {
    return (
      <div className="new-container">
        <h1>No tours left</h1>
        <button className="btn1" onClick={fetchTour}>Load Tours</button>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Our Tours</h1>
      <div className="underline"></div>
      <section className="container">
        <Tours tour={tour} removeTour={removeTour}></Tours>
      </section>
    </div>
  );
}

export default App;
