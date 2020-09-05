/*
 * Payment List
 */
import React from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { Container, Button } from "react-bootstrap";
import LoadingIndicator from "components/UI/LoadingIndicator/LoadingIndicator";
import DatePicker from "components/UI/DatePicker/datePicker";

import { getPayments } from "api/paymentApi";
import moment from "moment";

import PaymentList from "./component/PaymentList";

import messages from "./messages";
import style from "./payment.module.scss";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentData: [],
      isLoading: true,
      startDate: moment().subtract(1, "months"),
      endDate: moment(),
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.reloadState = this.reloadState.bind(this);
  }

  componentDidMount() {
    this.reloadState();
  }

  async reloadState() {
    this.setState({ isLoading: true });
    const result = await getPayments();
    console.log(result);
    this.setState({
      paymentData: result,
      isLoading: false,
    });
  }

  handleDateChange(val, name) {
    if (name === "startData") {
      this.setState({ startDate: val });
    } else {
      this.setState({ endDate: val });
    }
  }

  render() {
    const { isLoading, paymentData, showEditBank } = this.state;

    return (
      <article className={style.bankaccountbg}>
        <Helmet>
          <title>Payment Activity</title>
          <meta name="description" content="My Expertpay" />
        </Helmet>
        <Container>
          <h1 className={style.pageheader}>
            <FormattedMessage {...messages.header} />
          </h1>
          <hr />
          <DatePicker
            name="startData"
            label="Start Date"
            id="startDate"
            value={this.state.startDate}
            onValueChange={this.handleDateChange}
          />
          <DatePicker
            name="endDate"
            label="End Date"
            id="endDate"
            value={this.state.endDate}
            onValueChange={this.handleDateChange}
          />

          <Button variant="primary" size="md">
            Send Money
          </Button>

          <Button variant="primary" size="md">
            Request Money
          </Button>
          <hr />

          {isLoading && <LoadingIndicator />}
          {!isLoading && <PaymentList paymentData={paymentData} />}
        </Container>
      </article>
    );
  }
}

export default Payment;
