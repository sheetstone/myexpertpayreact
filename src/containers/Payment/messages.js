/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from "react-intl";

export const scope = "myexpertpay.containers.Payment";

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "Payment Activities",
  },
  sendBtn: {
    id: `${scope}.sendBtn`,
    defaultMessage: `Send Money`,
  },
  requestBtn: {
    id: `${scope}.requestBtn`,
    defaultMessage: `Request Money`,
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
