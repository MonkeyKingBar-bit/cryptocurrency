import { Link } from 'react-router-dom';
import { commonActions } from '../../store/reducers/common';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const Header = () => {
  const dispatch = useAppDispatch();
  const { currencies } = useAppSelector((state) => state.currency);

  const priceNum = currencies.map((currency) => +currency.priceUsd);
  let max1 = 0;
  let max2 = 0;
  let max3 = 0;
  let maxName1 = '';
  let maxName2 = '';
  let maxName3 = '';

  if (priceNum.length > 2) {
    currencies.forEach((currency) => {
      if (+currency.priceUsd > max1 && currency.name) {
        max3 = max2;
        max2 = max1;
        max1 = currency.priceUsd;
        maxName1 = currency.name;
      } else if (+currency.priceUsd > max2 && currency.name) {
        max3 = max2;
        max2 = currency.priceUsd;
        maxName2 = currency.name;
      } else if (+currency.priceUsd > max3 && currency.name) {
        max3 = currency.priceUsd;
        maxName3 = currency.name;
      }
    });
  }

  const popularCrypt = [
    { id: 1, maxValue: max1, maxName: maxName1 },
    { id: 2, maxValue: max2, maxName: maxName2 },
    { id: 3, maxValue: max3, maxName: maxName3 }];

  return (
    <header className="header">
      <Link to="/"><h2 className="header_logo">CryptoCurrency</h2></Link>
      <ul className="header-items">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="header-items__hamburger">&#9776;</label>
        <div className="header-items__menu">
          {popularCrypt.map((m) => (
            <li key={m.id}>
              <p>{m.maxName}</p>
              <p>
                {`${Math.round(m.maxValue * 100) / 100} `}
                &#36;
              </p>
            </li>
          ))}
          <div className="header_profile" onClick={() => dispatch(commonActions.modalActive())} aria-hidden="true">Profile</div>
        </div>
      </ul>

    </header>
  );
};

export default Header;
