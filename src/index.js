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
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './shared/store/configureStore';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: deepOrange900
    }
});

const store = configureStore();

const app = (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <BrowserRouter>
                <Route component={App} path="/" />
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
