import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './css/theme.css';
// import App from './App';
import Contoh from './contoh/Contoh';
// import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Content from "./contoh/Content";
import NotFound from "./not_found/NotFound";

ReactDOM.render((
        <Router>
            <switch>
                <Route exact path="/" component={Contoh}/>
                <Route exact path="/test" component={Content}/>
                <Route component={NotFound} />
            </switch>
        </Router>
    ), document.getElementById('root'));
// registerServiceWorker();
