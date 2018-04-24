import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './css/theme.css';
// import App from './App';
import Contoh from './contoh/Contoh';
import ToDo from './todo/components/ToDo';
// import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Content from "./contoh/Content";
import NotFound from "./not_found/NotFound";
import Pos from "./pos/components/Pos";

ReactDOM.render((
        <Router>
            <Switch>
                <Route exact path="/" component={Contoh}/>
                <Route exact path="/test" component={Content}/>
                <Route exact path="/todo" component={ToDo}/>
                <Route exact path="/pos" component={Pos}/>
                <Route component={NotFound} />
            </Switch>
        </Router>
    ), document.getElementById('root'));
// registerServiceWorker();
