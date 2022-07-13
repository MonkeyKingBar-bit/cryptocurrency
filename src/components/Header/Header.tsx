import { commonActions } from '../../store/reducers/common';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const Header = () => {
  const dispatch = useAppDispatch();
  const { currencies } = useAppSelector((state) => state.currency);

  const priceNum = currencies.map((currency) => +currency.priceUsd);
  // const maxPriceArr = [];
  //
  // priceNum.forEach((price) => {
  //   const maxObj = currencies.reduce((prev, cur) => (+cur.priceUsd > +prev.priceUsd ? cur : prev), { priceUsd: -Infinity });
  //
  // });
  //
  // // если нужен индекс элемента массива
  // const maxIndex = currencies.reduce((acc, curr, i) => (currencies[acc].priceUsd > curr.priceUsd ? acc : i), 0);

  // console.log(maxObj, maxIndex);

  let max1 = 0;
  let max2 = 0;
  let max3 = 0;
  const name = [];

  if (priceNum.length > 2) {
    currencies.forEach((currency) => {
      if (+currency.priceUsd > max1) {
        max3 = max2;
        max2 = max1;
        max1 = currency.priceUsd;
        name.push(currency.name);
      } else if (+currency.priceUsd > max2) {
        max3 = max2;
        max2 = currency.priceUsd;
        name.push(currency.name);
      } else if (+currency.priceUsd > max3) {
        max3 = currency.priceUsd;
        name.push(currency.name);
      }
    });
  }

  console.log(max1, max2, max3, name);

  return (
    <header className="header">
      <div className="header_logo">CryptoCurrency</div>
      <ul className="header-items">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="header-items__hamburger">&#9776;</label>
        <div className="header-items__menu">
          <li>Crypt1</li>
          <li>Crypt1</li>
          <li>Crypt1</li>
          <li className="header_profile" onClick={() => dispatch(commonActions.modalActive())} aria-hidden="true">Profile</li>
        </div>
      </ul>
    </header>
  );
};

export default Header;
