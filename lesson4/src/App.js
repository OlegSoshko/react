import React from 'react';
import Car from './Car/Car'
import './App.css';

function App() {
  const divStyle = {
    textAlign: 'center'
  }
 return (
      <div style={divStyle}>
        <h1>Hello World!</h1>

        <Car />
        <Car />
      </div>
  );
}
export default App;
