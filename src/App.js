import React, { Component } from 'react';
import './App.css';
import render3D from './3dmodels/lab1.js'
class App extends Component {

    componentDidMount() {
        render3D();
    }

  render() {
      return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <a className="lab-btn">Lab 1</a>
                    <a className="lab-btn lab-btn-active">Lab 2</a>
                    <a className="lab-btn">Lab 3</a></div>
                <div className="col-12 text-center" id="models"></div>
                <div className="col-12 text-center about fixed-bottom">
                    <a className="about-btn">Подробнее</a>
                </div>
            </div>
        </div>

        <button className="prev btn"><i className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true"></i></button>
      <button className="next btn"><i className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true"></i></button>
    </div>
  )};
}

export default App;
