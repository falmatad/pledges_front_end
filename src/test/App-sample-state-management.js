import React, {Component} from 'react';
// import Cover from './components/Cover';
// import Header from './components/Header';
import './App.css';

// make a new context
const MyContext = React.createContext();

// Createa provider Component
class MyProvider extends Component {
  state = {
    name: 'west',
    age: 100,
    cool: true
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Familly = props => (
  <div className="familly">
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Im inside the consumer {context.state.age}</p>
              <p>Im inside the consumer {context.state.name}</p>
              <button onClick={context.growAYearOlder}>Incement</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component  {

  render() {

    return (
      <MyProvider>

      <div className="App">
        im the app
        <Familly />
    </div>
      </MyProvider>
  );
}
}

export default App;
