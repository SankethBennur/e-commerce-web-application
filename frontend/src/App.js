import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/layouts/layout.header.js';
import Home from './containers/containers.home';
import Signin from './containers/containers.signin';
import Signup from './containers/containers.signup';

function App() { 
  return (
    <div className="App">
        <Header />   {/*  I am going to have persistent Header throughout my App */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
