/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import classes from './Homepage.module.scss';
//import Welcome from './component/Welcome';
//import TabList from './component/TabList';

import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

export default function HomePage() {
  return (
    <article className={classes.Background}>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="My ExpertPay homepage dashboard" />
      </Helmet>

      
      <Container>
        <h1>Home page</h1>
        <LoadingIndicator />
        {/*<Welcome />*/}
      </Container>


      {/*<TabList />*/}
    </article>
  );
}
