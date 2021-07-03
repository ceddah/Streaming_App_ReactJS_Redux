import React from 'react'
import ReactDOM from 'react-dom'
import reducers from './reducers'
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import App from './components/App';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers
    // composeEnhancers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);