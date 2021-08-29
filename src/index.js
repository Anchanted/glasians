import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "@/locales/index"
import Home from '@/pages/home/Home';
import IntroEn from '@/pages/intro/IntroEn';
import IntroZh from '@/pages/intro/IntroZh';
import IntroIt from '@/pages/intro/IntroIt';
import TradeEn from '@/pages/trade/TradeEn';
import TradeZh from '@/pages/trade/TradeZh';
import TradeIt from '@/pages/trade/TradeIt';
import ContactEn from '@/pages/contact/ContactEn';
import ContactZh from '@/pages/contact/ContactZh';
import ServiceEn from '@/pages/service/ServiceEn';
import ServiceZh from '@/pages/service/ServiceZh';
import ServiceIt from '@/pages/service/ServiceIt';
import NotFound from '@/pages/notfound/NotFound';

let lang = navigator.language || ''
if (lang.length >= 2) {
  switch (lang.substring(0, 2)) {
    case 'it':
      lang = 'it'
      break;
    case 'zh':
      lang = 'zh'
      break;
    default:
      lang = 'en'
      break;
  }
}

const routing = (
  <Router>
    <Switch>
      <Route exact path="/:lang(en)/:navName(intro)" component={IntroEn} />
      <Route exact path="/:lang(zh)/:navName(intro)" component={IntroZh} />
      <Route exact path="/:lang(it)/:navName(intro)" component={IntroIt} />
      <Route exact path="/:lang(en)/:navName(trade)" component={TradeEn} />
      <Route exact path="/:lang(zh)/:navName(trade)" component={TradeZh} />
      <Route exact path="/:lang(it)/:navName(trade)" component={TradeIt} />
      <Route exact path="/:lang(en|it)/:navName(contact)" component={ContactEn} />
      <Route exact path="/:lang(zh)/:navName(contact)" component={ContactZh} />
      <Route exact path="/:lang(en)/:navName(service)" component={ServiceEn} />
      <Route exact path="/:lang(zh)/:navName(service)" component={ServiceZh} />
      <Route exact path="/:lang(it)/:navName(service)" component={ServiceIt} />
      <Route exact path="/:lang(en|zh|it)" component={Home} />
      <Route exact path="/">
        <Redirect to={`/${lang}`}/>
      </Route>
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
