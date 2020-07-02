/*
 * Bank Account
 */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LoadingIndicator from 'components/UI/LoadingIndicator/LoadingIndicator';

import { getBanks, deleteBank } from 'api/bankApi';

import BankList from './BankList';
import EditModal from './EditModal';

import style from './bankAccount.module.scss';
import messages from './messages';

const BankAccount = (props) => {
 
  const [showEditBank, setShowEditBank] = useState(false);
  const [bankData, setBankData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    reloadState();
  })

  const reloadState = async () => {
    //setIsLoading(true);
    const result = await getBanks();
    setBankData(result);
    setIsLoading(false);
  }

  const delBank =  async (item) => {
    const result = await deleteBank(item.id);
    console.log(result);
    reloadState();
  }

  return (
    <article className={style.bankaccountbg}>
      <Helmet>
        <title>Bank Account</title>
        <meta name="description" content="My Expertpay" />
      </Helmet>

      <Container>
        <h1 className={style.pageheader}>
          <FormattedMessage {...messages.header} />
        </h1>
        <hr />
        <p className={style.pageScaffoldingHeader}>
          <FormattedMessage {...messages.scaffoldingHeader} />
        </p>
        <Button variant="primary" size="md" onClick={() => setShowEditBank(true)}>
          <FontAwesomeIcon icon={faPlus} color="#ffffff" />
          &nbsp;New Bank Account
        </Button>
        <hr />
        {isLoading && <LoadingIndicator />}
        {!isLoading && <BankList bankData={bankData}/>}
        <EditModal show={showEditBank} onHide={()=> setShowEditBank(false)} reloadState={reloadState} />
      </Container>

    </article>
  );

}

export default BankAccount;
