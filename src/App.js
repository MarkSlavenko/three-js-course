import React, { Component } from 'react';
import './App.css';
import LabInfo from './Components/LabInfo';
import Slider from './Components/Slider';
import Models from './Components/Models';
import {modelCords, numberOfLabs} from './Constans';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            labInfo: false,
            currentLab: 1,
            disabled: false,
            labText: null,
            aboutInfo: false
        };

    }

    componentDidMount() {
        this.currentLabTextUpdate();

        let req =  require('./Labs/about.md');
        fetch(req).then((response) => response.text()).then((text) => {
           this.aboutInfo = text;
        })
    }

    hideInfo = (hidden) => { // Открыть/Скрыть PopUp с данными об лабораторной работе.
        if (hidden === "lab") {
            this.setState(state => ({
                labInfo: !state.labInfo
            }));
        } else {
            this.setState(state => ({
                aboutInfo: !state.aboutInfo
            }));
        }
    };

    currentLabTextUpdate = () => {  // Получение данных об лабораторной работе.
        let labTextFile =  require('./Labs/lab' + this.state.currentLab + '.md');
        fetch(labTextFile).then((response) => response.text()).then((text) => {
            this.setState({ labText: text })
        })
    };


    currentUpdate = (current) => {
        modelCords[current] ? this.childModels.moveCamera(...modelCords[current]):  // проверка на наличие координат
            this.childModels.moveCamera(2000, 2000, 2000);  // если координаты не заданы, поднять камеру на верх

        this.setState({
            currentLab: current + 1,
        }, () => this.currentLabTextUpdate());
    };

    nextLab = () => {
        this.child.next();
        this.setState({
            disabled: true
        });

        setTimeout(() => {  this.setState(state => ({
            disabled: false,
        }));}, 500);
    };

    prevLab = () => {
        this.child.previous();
        this.setState({
            disabled: true,
        });

        setTimeout(() => {  this.setState(state => ({
            disabled: false,
        }));}, 500);
    };


  render() {
      return (
    <div>
        <div className="container-fluid">
            <div className="row">
            <Slider
                numberOfLabs = {numberOfLabs}
                currentUpdate={this.currentUpdate}
                ref={instance => { this.child = instance; }}
            />
                <Models ref={instance => { this.childModels = instance; }}/>
                <div className="col-12 text-center fixed-bottom bottom-block">
                    <div className="col-12">
                        {!this.state.labInfo ? <a onClick={()=>this.hideInfo("lab")} className={"about-btn " + (this.state.currentLab === 5 ? "special" : "")}>Докладніше</a> : null}
                    </div>
                    <div className={"col-12 about-block " + (this.state.currentLab === 5 ? "special" : "")}>
                        <a href="https://moodle.znu.edu.ua/" target="_blank">Moodle</a> ● Запорізький національний університет ● <a onClick={this.hideInfo}>Про курс</a>
                    </div>
                </div>
            </div>
        </div>

        {this.state.labInfo ? <LabInfo
            Hide={()=>this.hideInfo("lab")}
            Lab={this.state.currentLab}
            Text={this.state.labText}
            Download={true}
        /> : null}

        {this.state.aboutInfo ? <LabInfo
            Hide={this.hideInfo}
            Text={this.aboutInfo}
        /> : null}


        <button onClick={this.prevLab}
                disabled={this.state.disabled}
                className={"prev btn " + (this.state.currentLab === 5 ? "special" : "")}>
            <i className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true"></i>
        </button>
      <button onClick={this.nextLab}
              disabled={this.state.disabled}
              className={"next btn " + (this.state.currentLab === 5 ? "special" : "")}>
          <i className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true"></i>
      </button>
    </div>
  )};
}

export default App;
