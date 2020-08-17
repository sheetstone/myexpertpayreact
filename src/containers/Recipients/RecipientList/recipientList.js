import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import LoadingIndicator from 'components/UI/LoadingIndicator/LoadingIndicator'
import { getRecepient } from 'api/recipentApi.js'

import Recipient from "./Recipient/recipient";

import classes from "./recipientList.module.scss";

export default function RecipientList(props) {
  const [recipents, setRecipents] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //TODO: move caselist into store
    getRecepient()
      .then(res => {
        setRecipents(res)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const recipiItemList = () => {
    if (isLoading) return <LoadingIndicator />
    const list = [];
    for (const [key, item] of Object.entries(recipents)) {
      const reciItem = {
        active: item.active,
        name: item.payeeName,
        email: item.emailAddress,
        tel: item.phoneNum
      }
      list.push(<Col xs="12" md="4" key={key}>
                  <Recipient reciItem={reciItem} />
                </Col>)
    }
    return list
  }

  return (
    <>
      <h1 className={classes.pageheader}>Recipients</h1>
      <hr />
      <p>Below is a list of your recipients.</p>
      <Row>
        <Col>
          <Link to={props.match.url + "/addnewrecipient"}>
            <Button variant="primary" size="md">
              <FontAwesomeIcon icon={faPlus} color="#ffffff" />
              &nbsp;Add New Recipient
            </Button>
          </Link>
        </Col>
      </Row>

      <Row>
        {recipiItemList()}
      </Row>
    </>
  );
}
