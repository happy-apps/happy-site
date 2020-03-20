import React from 'react';
import Layout from "./layout"

import messages from '../../i18n/en';
import "@formatjs/intl-pluralrules/dist/locale-data/en"

export default (props) => (
  <Layout
    {...props}
    messages={messages}
  />
);
