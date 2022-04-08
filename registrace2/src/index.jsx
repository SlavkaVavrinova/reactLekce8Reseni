import React from 'react';
import { render } from 'react-dom';
import Registrace from './Components/Registrace';
import './style.css';

const App = () => <Registrace />;

render(<App />, document.querySelector('#app'));
