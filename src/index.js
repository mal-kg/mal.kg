import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {Provider} from "react-redux";
import store from "./store/configureStore";
import theme from "./theme";
import {ThemeProvider} from "@mui/styles";


const app = (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
        </ThemeProvider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));