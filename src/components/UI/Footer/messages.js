/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myexpertpay.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: 'This project is licensed under the MIT license.',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with love by {author}.
    `,
  },
  contactInfoTel: {
    id: `${scope}.contactInfo.tel`,
    defaultMessage: '512-775-2142'
  },
  contactInfoEmail:{
    id: `${scope}.contactInfo.email`,
    defaultMessage: 'sheetstone@gmail.com'
  }
});



