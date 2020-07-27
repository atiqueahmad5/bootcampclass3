import React from 'react';
import './App.css';
import Dinner from './dinner.js';
function App() {
  return (
    <div>
      {/* <Dinner></Dinner> */}

      <Dinner dishName="Chicken Biryani" sweetDish="Kheer"/>
      <Dinner dishName="Chicken Karhai" sweetDish="Jaleebi"/>
      <Dinner dishName="Chicken Nihaari" sweetDish="Gajar ka Halwa"/>
      <Dinner dishName="Chicken Rice" sweetDish="Phirni"/>
    </div>
  );
}

export default App;
