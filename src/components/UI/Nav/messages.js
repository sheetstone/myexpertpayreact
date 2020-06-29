/*
 * Navigation Messages
 *
 * This contains all the text for the navigation component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myexpertpay.components.nav';

export default defineMessages({
  bankAccount: {
    id: `${scope}.bankAccount`,
    defaultMessage: 'Bank Account',
  },
  caseInfo: {
    id: `${scope}.caseInfo`,
    defaultMessage: `Case Info`,
  },
  recipients: {
    id: `${scope}.recipients`,
    defaultMessage: 'Recipients'
  },
  payment:{
    id: `${scope}.payment`,
    defaultMessage: 'Payment'
  },
  logo:{
    id: `${scope}.logo`,
    defaultMessage: 'My Expertpay logo'
  }
});



