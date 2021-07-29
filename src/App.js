// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterScreen from './components/auth/RegisterScreen';
import LoginScreen from './components/auth/LoginScreen';
import CrearProducto from './components/pages/CrearProducto';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={ store }>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/crear-cuenta" component={RegisterScreen} />
        <Route exact path="/crear-producto" component={CrearProducto} />
      </Switch>
    </Router>
    </Provider>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
