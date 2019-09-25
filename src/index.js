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
import BadgeSandbox from './component/badge/BadgeSandbox';
import ListGroupSandbox from './component/listGroup/ListGroupSandbox';
import InputSandbox from './component/input/InputSandbox';
import TabBarSandbox from './component/tabBar/TabBarSandbox';
import TooltipSandbox from './component/tooltip/TooltipSandbox';
import ModalSandbox from './component/modal/ModalSandbox';

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
        <Route exact path="/badge" component={BadgeSandbox} />
        <Route exact path="/listGroup" component={ListGroupSandbox} />
        <Route exact path="/input" component={InputSandbox} />
        <Route exact path="/tabBar" component={TabBarSandbox} />
        <Route exact path="/tooltip" component={TooltipSandbox} />
        <Route exact path="/modal" component={ModalSandbox} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
