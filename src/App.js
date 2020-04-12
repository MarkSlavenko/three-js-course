import React, { Component } from 'react';
import './App.css';
import LabInfo from './Components/LabInfo';
import Slider from './Components/Slider';
import Models from './Components/Models'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {LabInfoOn: false,
        currentLab: 1,
            disabled: false,
            labText: null,
        };

    }

    componentWillMount() {
        let labTextFile =  require('./Labs/lab' + this.state.currentLab + '.md');

        fetch(labTextFile).then((response) => response.text()).then((text) => {
            this.setState({ labText: text })
        })
    }

    hideLabInfo = () => {
        this.setState(state => ({
            LabInfoOn: !state.LabInfoOn
        }));
    }

    currentLabTextUpdate = () => {
        let labTextFile =  require('./Labs/lab' + this.state.currentLab + '.md');
        fetch(labTextFile).then((response) => response.text()).then((text) => {
            this.setState({ labText: text })
        })
    }


    currentUpdate = (current) => {
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

        this.childModels.moveCamera(550, 0, 0);

        setTimeout(() => {  this.setState(state => ({
            disabled: false,
        }));}, 500);
    }

    prevLab = () => {
        this.child.previous();
        this.setState(state => ({
            disabled: true,
        }));

        this.childModels.moveCamera(0, 0, 350);

        setTimeout(() => {  this.setState(state => ({
            disabled: false,
        }));}, 500);
    }


  render() {
      return (
    <div>
        <div className="container-fluid">
            <div className="row">
            <Slider currentUpdate={this.currentUpdate} ref={instance => { this.child = instance; }}/>
                <Models ref={instance => { this.childModels = instance; }}/>
                <div className="col-12 text-center about fixed-bottom">
                    {!this.state.LabInfoOn ? <a onClick={this.hideLabInfo} className="about-btn">Подробнее</a> : null}
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
