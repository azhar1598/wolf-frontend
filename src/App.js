import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Login from './Login';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login}/>
    </Router>
  );
}

export default App;
