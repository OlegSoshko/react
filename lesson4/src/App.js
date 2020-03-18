import React, { Component } from 'react';
import Car from './Car/Car'
import './App.css';

class App extends Component{

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda 1', year: 2010}
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  inputHandle = (event) => {
    this.setState()
    console.log('Changed', event.target.value);
  }

  render() {
    console.log('render')
    const divStyle = {
      textAlign: 'center'
    }

    //const cars = this.state.cars

   return (
        <div style={divStyle}>
          <h1>{this.state.pageTitle}</h1>

          <input type="text" onChange={this.inputHandle}/>

          <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>
  
          {this.state.cars.map((car, index) => {
            return(
              <Car 
                key={index}
                name={car.name}
                year={car.year}
                onChangeTitle={() => this.changeTitleHandler(car.name)}
              />
            )
          })}
        </div>
    );
  }
}
export default App;
