/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myexpertpay.containers.BankAccount';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Bank Accounts',
  },
  scaffoldingHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage:
      'Below is a list of your bank accounts. To edit/delete an account, click on the account row and select from the dropdown menu. To validate an account not yet verified please click on the account row and select "Verify" from the dropdown menu. To add a new bank account, select "New Bank Account."',
  },
});
