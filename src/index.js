import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange900 } from 'material-ui/styles/colors';
import registerServiceWorker from './registerServiceWorker';
import App from './app/containers/App/App.js';
import './index.css';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: deepOrange900
    }
});

const app = (
    <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
            <Route component={App} path="/" />
        </BrowserRouter>
    </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
