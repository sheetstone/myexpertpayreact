/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from "react-intl";

export const scope = "myexpertpay.containers.BankAccount";

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "Bank Accounts",
  },
  scaffoldingHeader: {
    id: `${scope}.scaffoldingHeader`,
    defaultMessage:
      'Below is a list of your bank accounts. To edit/delete an account, click on the account row and select from the dropdown menu. To validate an account not yet verified please click on the account row and select "Verify" from the dropdown menu. To add a new bank account, select "New Bank Account."',
  },
  addBankTitle: {
    id: `${scope}.addBankTitle`,
    defaultMessage: "Bank Accounts",
  },
  addBankSubmit: {
    id: `${scope}.addBankSubmit`,
    defaultMessage: "Confirm & Complete",
  },
  addBankMessage: {
    id: `${scope}.addBankMessage`,
    defaultMessage:
      "By add bank account, you accept the General Condition & Confidentiality Rules",
  },
  accountNumber: {
    id: `${scope}.accountNumber`,
    defaultMessage: "Account Number",
  },
  accountNumberConfirmation: {
    id: `${scope}.accountNumberConfirmation`,
    defaultMessage: "Confirm Account",
  },
  rountingNumber: {
    id: `${scope}.rountingNumber`,
    defaultMessage: "Bank Routing Number",
  },
});
