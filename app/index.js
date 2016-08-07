import 'babel-polyfill';
import React                from 'react';
import { render }           from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes               from "./routes";
import './assets/sass/main.scss';

injectTapEventPlugin();

render(routes, document.getElementById('app'));
