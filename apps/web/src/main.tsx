import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './app/app';
import i18n from './config/i18n.config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
