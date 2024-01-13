import { useTranslation } from 'react-i18next';

export function App() {
  const {t} = useTranslation();
  return <div>{t('title')}</div>;
}

export default App;
