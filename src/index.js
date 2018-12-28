import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
