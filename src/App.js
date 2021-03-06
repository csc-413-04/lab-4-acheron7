import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      banner: 'hello',
      isOpen: false,
      timer: 0,
    };

    this.buttonHandler = this.buttonHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
  }

  buttonHandler() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  textHandler(e) {
    this.setState({
      banner: e.target.value,
    });
  
  }

  tick() {
    this.setState(state => ({
      timer: state.timer + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let myVariable = <h2>David</h2>;
    let myBanner;
    if (this.state.isOpen) {
      myBanner = <Header banner={this.state.banner}/>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {myVariable}
          </p>
          <h2>Live for {this.state.timer} seconds.</h2>
          
          {myBanner}
          
          <input value={this.state.banner} onChange={this.textHandler}/>
          <button onClick={this.buttonHandler} >Click Me</button>
        </header>
      </div>
    );
  }
}





const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);