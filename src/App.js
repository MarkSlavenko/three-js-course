import React, { Component } from 'react';
import './App.css';
import render3D from './3dmodels/lab1.js';
import LabInfo from './Components/LabInfo';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {LabInfoOn: false,
        CurrentLab: 1
        };

        this.refForThreeJS = React.createRef();
    }


    componentDidMount() {
        render3D(this.refForThreeJS.current);
    }

    hideLabInfo = () => {
        this.setState(state => ({
            LabInfoOn: !state.LabInfoOn
        }));
    }

    nextLab = () => {
        this.setState(state => ({
            CurrentLab: state.CurrentLab + 1
        }));
    }

    prevLab = () => {
        if (this.state.CurrentLab > 1)
        this.setState(state => ({
            CurrentLab: state.CurrentLab - 1
        }));
    }

  render() {
      return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <a className="lab-btn lab-btn-active">Lab 1</a>
                    <a className="lab-btn ">Lab 2</a>
                </div>
                <div className="col-12 text-center models" ref={this.refForThreeJS}></div>
                <div className="col-12 text-center about fixed-bottom">
                    {!this.state.LabInfoOn ? <a onClick={this.hideLabInfo} className="about-btn">Подробнее</a> : null}
                </div>
            </div>
        </div>

        {this.state.LabInfoOn ? <LabInfo
            Hide={this.hideLabInfo}
            Lab={this.state.CurrentLab}
        /> : null}


        <button onClick={this.prevLab} className="prev btn"><i className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true"></i></button>
      <button onClick={this.nextLab} className="next btn"><i className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true"></i></button>
    </div>
  )};
}

export default App;
