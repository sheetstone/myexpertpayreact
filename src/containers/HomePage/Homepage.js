/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";

import classes from "./Homepage.module.scss";
import Welcome from "./Welcome";
import TabList from "./TabList/tabList";

export default function HomePage() {
  return (
    <article className={classes.Background}>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="My ExpertPay homepage dashboard" />
      </Helmet>

      <Container>
        <Welcome />
      </Container>

      <TabList />
    </article>
  );
}
