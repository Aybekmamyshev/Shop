import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from "./Context";
import "./i18n"
import {Provider} from "react-redux";
import store from "./redux/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Context>
            <App />
        </Context>
    </Provider>

 );


