import React from 'react';
import { Tab, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea, faCommentDots, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import AccountSummary from '../AccountSummary';
import Messages from '../Messages';
import ActivityCalendar from '../ActivityCalendar';

import style from './styles/style.scss';


//  This page used fa-awsome looking at document for more details:
//  https://github.com/FortAwesome/react-fontawesome

function TabList() {
  return (
    <Tab.Container id="dashboard_tablist" defaultActiveKey="accountsummary" >
      <Container>
        <Nav variant="tabs" className={style.tabList}>
          <Nav.Item className={style.tabItem}>
            <Nav.Link eventKey="accountsummary" className={style.tabLink}>
              <FontAwesomeIcon icon={faChartArea} />
              Account Summary
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={style.tabItem}>
            <Nav.Link eventKey="messages" className={style.tabLink}>
              <FontAwesomeIcon icon={faCalendarCheck} />
              Messages
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={style.tabItem}>
            <Nav.Link eventKey="activity" className={style.tabLink}>
              <FontAwesomeIcon icon={faCommentDots} />
              Activity
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      <Tab.Content
        className={style.tabContent}
        style={{ minHeight: getMinHeight() }}
      >
        <Tab.Pane eventKey="accountsummary">
          <AccountSummary />
        </Tab.Pane>
        <Tab.Pane eventKey="messages">
          <Messages />
        </Tab.Pane>
        <Tab.Pane eventKey="activity">
          <ActivityCalendar />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}
function getMinHeight() {
  return window.innerHeight - (70+98+110+42+1);
}

export default TabList;
