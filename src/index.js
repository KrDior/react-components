import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/home';
import ButtonSandbox from './component/button/ButtonSandbox';
import ButtonGroupSandbox from './component/buttonGroup/ButtonGroupSandbox';
import IconSandbox from './component/icon/IconSandbox';
import ImageSandbox from './component/image/ImageSandbox';
import ChipSandbox from './component/chip/ChipSandbox';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/button" component={ButtonSandbox} />
        <Route exact path="/buttonGroup" component={ButtonGroupSandbox} />
        <Route exact path="/icon" component={IconSandbox} />
        <Route exact path="/image" component={ImageSandbox} />
        <Route exact path="/chip" component={ChipSandbox} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
