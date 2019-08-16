import React from 'react';
import './App.css';

const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    color: '#FF5252'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    color: '#607D8B'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    color: '#FF4081'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    color: '#536DFE'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    color: '#795548'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    color: '#448AFF'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    color: '#FF9800'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    color: '#673AB7'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    color: '#FF5722'
  },
];

const TriggerKey = (props) => {
  return (
    <p>{this.props.keyCode}</p>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: bankOne,
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  playSound(id) {
    document.getElementById(id).play();
  }
  handleKeyPress(e) {
    console.log(e.keyCode,this.state);
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  render() {
  return (
    <div className="App">
      <div id="drum-machine">
          <h1>Drum Machine</h1>
          <div id="display">
            {this.state.list.map(item =>
              <div 
                className="drum-pad" 
                style={{backgroundColor:item.color}} 
                id={item.id}
                onClick={() => this.playSound(item.keyTrigger)}
                >
                  {item.keyTrigger}
                  <audio src={item.url} className="clip" id={item.keyTrigger}></audio>
              </div>
            )}
          </div>
          <p>artdor1978</p>
          <TriggerKey />
      </div>
    </div>
  );
  }
}

export default App;
