import '../css/App.css';
import {Login} from '../components/Login';
import { Background } from './Background';
import {Signup} from './Signup'
import {Welcome} from './Welcome';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
     <div>
       <Background/>
       <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route path="/login" >
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        </Switch>
      </BrowserRouter>
     </div>
    );
}

export default App;
