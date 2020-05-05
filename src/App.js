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
            LabInfoOn: false,
            currentLab: 1,
            disabled: false,
            labText: null,
        };

    }

    componentWillMount() {
        this.currentLabTextUpdate();
    }

    hideLabInfo = () => { // Открыть/Скрыть PopUp с данными об лабораторной работе.
        this.setState(state => ({
            LabInfoOn: !state.LabInfoOn
        }));
    }

    currentLabTextUpdate = () => {  // Получение данных об лабораторной работе.
        let labTextFile =  require('./Labs/lab' + this.state.currentLab + '.md');
        fetch(labTextFile).then((response) => response.text()).then((text) => {
            this.setState({ labText: text })
        })
    }


    currentUpdate = (current) => {
        modelCords[current] ? this.childModels.moveCamera(...modelCords[current]):  // проверка на наличие координат
            this.childModels.moveCamera(2000, 2000, 2000);  // если координаты не заданы, поднять камеру на верх

        this.setState(state => ({
            currentLab: current + 1,
        }));

        setTimeout(() => this.currentLabTextUpdate(), 500);
    }

    nextLab = () => {
        this.child.next();
        this.setState(state => ({
            disabled: true
        }));

        setTimeout(() => {  this.setState(state => ({
            disabled: false,
        }));}, 500);
    }

    prevLab = () => {
        this.child.previous();
        this.setState(state => ({
            disabled: true,
        }));

        setTimeout(() => {  this.setState(state => ({
            disabled: false,
        }));}, 500);
    }


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
                <div className="col-12 text-center about fixed-bottom">
                    {!this.state.LabInfoOn ? <a onClick={this.hideLabInfo} className="about-btn">Докладніше</a> : null}

                </div>
            </div>
        </div>

        {this.state.LabInfoOn ? <LabInfo
            Hide={this.hideLabInfo}
            Lab={this.state.currentLab}
            Text={this.state.labText}
        /> : null}


        <button onClick={this.prevLab} disabled={this.state.disabled} className="prev btn"><i className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true"></i></button>
      <button onClick={this.nextLab} disabled={this.state.disabled} className="next btn"><i className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true"></i></button>
    </div>
  )};
}

export default App;
