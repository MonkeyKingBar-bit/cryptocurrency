import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchCurrencies } from './store/reducers/actionCreators';
import Header from './components/Header/Header';
import Main from './components/pages/Main/Main';
import Details from './components/pages/Details/Details';
import Modal from './components/Modal/Modal';
import './stylesheets/App.scss';

const App = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.currency);
  const modalSelector = useAppSelector((state) => state.common.isModalActive);

  let component;
  switch (window.location.pathname) {
    case '/':
      component = <Main />;
      break;
    case '/details':
      component = <Details />;
      break;
  }

  useEffect(() => {
    dispatch((fetchCurrencies()));
  }, []);

  return (
    <div>
      <Header />
      <div className="app-wrapper">
        {isLoading && <h1>Loading ...</h1>}
        {error && <h1>{error}</h1>}
        {component}
      </div>
      {modalSelector && (
      <Modal>
        <form action="">
          <input type="number" />
          <button type="submit">Submit</button>
        </form>
      </Modal>
      )}
    </div>
  );
};

export default App;
