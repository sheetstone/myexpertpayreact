/*
 * Add New Cases
 */
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { Row, Col, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { getCases } from 'api/caseApi.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { deleteCase } from 'api/caseApi.js'
import LoadingIndicator from 'components/UI/LoadingIndicator/LoadingIndicator';

import classes from './caseslist.module.scss';

const header = ['Case Number', 'NCP Name', 'Children Name', 'Action'];

const CasesList = props => {
  const [cases, setCases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCases().then(res => {
      setCases(res);
      setIsLoading(false);
    }).catch(err => {
      console.log(err)
    })
  }, []);

  const casesListRow = [];
  const childColWidth = {
    'width': '446px'
  }

  const onEditClicked = (key, item, e) => {
    props.history.push(props.match.url+"/editcase", {
      key: key,
      case: item
    });
  }

  const onDeleteClicked = (key) => {
    deleteCase(key);
  }

  for (const [key, item] of Object.entries(cases)) {
    const { caseNumber, ncpName, children } = item;
    casesListRow.push(
      <tr key={key}>
        <td>{caseNumber}</td>
        <td>{ncpName}</td>
        <td className={classes.childrenCol}>
          <div className={classes.childrenWrap} style={childColWidth}>
            {
              children.join(', ')
            }
          </div>
        </td>
        <td>
          <Button variant="link" size="sm" onClick={e => onEditClicked(key, item, e)}>Edit</Button>
          <Button variant="link" size="sm" onClick={e => onDeleteClicked(key)}>Delete</Button>
        </td>
      </tr>
    )
  }

  const CasesListEle = () => (
    <>
      <Row>
        <Col>
          <Link to={ props.match.url + '/addnewcase' }>
            <Button variant="primary" size="md">
              <FontAwesomeIcon icon={faPlus} color="#ffffff" />
          &nbsp;Add New case</Button>
          </Link>
        </Col>
      </Row>

      <Row className={classes.tableWrapRow}>
        <Col className={classes.tableWrapCol}>
          <Table hover className={classes.casesTable}>
            <thead>
              <tr>
                {header.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {casesListRow}
            </tbody>
          </Table>
        </Col></Row>
    </>
  );

  return (
    <article className={classes.bankaccountbg}>
      <Helmet>
        <title>Case Info - Add new case</title>
        <meta name='description' content='My Expertpay' />
      </Helmet>

      {isLoading && <LoadingIndicator />}
      {!isLoading && <CasesListEle />}
    </article>
  )
}

export default CasesList
