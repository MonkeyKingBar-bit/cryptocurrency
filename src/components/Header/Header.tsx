import { commonActions } from '../../store/reducers/common';
import { useAppDispatch } from '../../hooks/redux';

const Header = () => {
  const dispatch = useAppDispatch();

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
