import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoadingIndicator from 'components/LoadingIndicator';

import { getPayments } from 'api/paymentApi';

import DashBoard from '../DashBoard';

import style from './styles/style.scss';

class AccountSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentData: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    getPayments().then(data =>
      this.setState({
        paymentData: data,
        isLoading: false,
      }),
    );
  }

  render() {
    const { paymentData, isLoading } = this.state;

    if (isLoading) {
      return <LoadingIndicator />;
    }
    return (
      <Container className={style.accountcontainer}>
        <Row>
          <Col>
            <DashBoard type="recieved" paymentData={paymentData} />
          </Col>
          <Col>
            <DashBoard type="sent" paymentData={paymentData} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AccountSummary;
