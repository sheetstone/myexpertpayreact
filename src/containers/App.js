/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/Homepage';
//import BankAccount from 'containers/BankAccount/Loadable';
//import CaseInfo from 'containers/CaseInfo/Loadable';
//import Payment from 'containers/Payment/Loadable';
//import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Layout/Header/Header';
import Footer from 'components/Layout/Footer/Footer';

export default function App() {
  return (
    <>
      <Helmet titleTemplate="%s - MyExpertPay" defaultTitle="MyExpertPay">
        <meta name="description" content="My ExpertPay" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/*<Route path="/bankaccount" component={BankAccount} />
        <Route path="/caseinfo" component={CaseInfo} />
        <Route path="/payment" component={Payment} />
        <Route path="/" component={NotFoundPage} />
        <Footer />
        */}
      </Switch>
      <Footer />
    </>
  );
}
