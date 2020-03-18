import React from 'react';
import './App.css';

function App() {
 return (
   <div>
      <div className="App">
        <p>Hello World!</p>
      </div>
      <p>Hello</p>
    </div>
  );
 
/*  return React.createElement(
   'div',
   {
     className: 'App'
   },
   React.createElement(
     'h1',
     null,
     'Hello world!'
   ),
 ) */
}
export default App;
