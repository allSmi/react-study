import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import ClickCounter from './component/ClickCounter';
import CountPannel from './component/CountPannel'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render( < ClickCounter / > , document.getElementById('root'));
ReactDOM.render( < CountPannel / > , document.getElementById('root'));

registerServiceWorker();
