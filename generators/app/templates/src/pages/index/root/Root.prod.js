import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../stores/configureStore';

import IndexWrapper from '../container/index';

let store = configureStore();

export default class Root extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Provider store={store}>
                <IndexWrapper />
            </Provider>
        );
    }
}

render(<Root />, document.getElementById('pages'));
