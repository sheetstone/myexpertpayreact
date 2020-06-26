/*
 * Bank Account
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LoadingIndicator from 'components/LoadingIndicator';

import { getBanks, deleteBank } from 'api/bankApi';

import BankList from './component/BankList';
import EditModal from './component/EditModal';

import style from './styles/style.scss';
import messages from './messages';

class BankAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditBank: false,
      bankData: [],
      isLoading: true,
    };
    this.setShowEditBank = () => this.setState({ showEditBank: true });
    this.setHideEditBank = () => this.setState({ showEditBank: false });
    this.delBank = this.delBank.bind(this);
    this.reloadState = this.reloadState.bind(this);
  }

  componentDidMount() {
    this.reloadState();
  }

  async reloadState() {
    this.setState({ isLoading: true });
    const result = await getBanks();
    this.setState({
      bankData: result,
      isLoading: false,
    });
  }

  async delBank(item) {
    // console.log("deleted:",item);
    await deleteBank(item.id);
    // console.log(result);
    this.reloadState();
  }

  render() {
    const { isLoading, bankData, showEditBank } = this.state;

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
          <Button variant="primary" size="md" onClick={this.setShowEditBank}>
            <FontAwesomeIcon icon={faPlus} color="#ffffff" />
            &nbsp;New Bank Account
          </Button>
          <hr />
          {isLoading && <LoadingIndicator />}
          {!isLoading && <BankList bankData={bankData} delBank={this.delBank}/>}
          <EditModal show={showEditBank} onHide={this.setHideEditBank} reloadState={this.reloadState} />
        </Container>
      </article>
    );
  }
}

export default BankAccount;
