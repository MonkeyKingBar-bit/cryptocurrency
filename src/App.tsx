import { useEffect, useState } from 'react';
import './stylesheets/App.scss';
import Header from './components/Header/Header';
import Main from './components/pages/Main/Main';
import Footer from './components/Footer/Footer';
import Details from './components/pages/Details/Details';
import { Currency } from './common/interface_type';
import clientApi from './services/clientAPI';

const App = () => {
  const [currencyList, setCurrencyList] = useState<Currency[]>([]);

  useEffect(() => {
    clientApi.cryptocurrencies
      .getAll()
      .catch((err) => {
        if (err.response) {
          console.log('response', err.response.statusText);
        } else if (err.request) {
          console.log('request', err.request);
        } else {
          console.log('message', err.message);
        }
        return Promise.reject(err);
      })
      .then((response) => {
        setCurrencyList(response.data.data);
      });
  }, []);

  let component;
  switch (window.location.pathname) {
    case '/':
      component = <Main currencyList={currencyList} />;
      break;
    case '/details':
      component = <Details />;
      break;
  }
  return (
    <div>
      <Header />
      <div className="app-wrapper">
        {component}
      </div>
      <Footer />
    </div>
  );
};

export default App;
