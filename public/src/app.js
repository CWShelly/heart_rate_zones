import React from 'react';
import ReactDOM from 'react-dom';

import HeartRateApp from './components/HeartRateApp'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const jsx = (
  <div>
  <HeartRateApp />
  </div>
)
ReactDOM.render(jsx, document.getElementById('app'));
