// import logo from './logo.svg';
import './App.css';
import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useEffect } from 'react';
import { firebase } from '../src/firebase/firebase-config';
// import { login } from './actions/auth';

function App() {
  
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
    })
  }, [])
  
  return (
    <Provider store={ store }>
    <AppRouter />
    
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
