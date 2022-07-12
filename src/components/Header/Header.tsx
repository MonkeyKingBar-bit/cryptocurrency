const Header = () => (
  <div className="header">
    <ul className="header-items">
      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="header-items__hamburger">&#9776;</label>
      <div className="header-items__menu">
        <li>Crypt1</li>
        <li>Crypt1</li>
        <li>Crypt1</li>
      </div>
    </ul>
    <div className="header_profile">Profile</div>
  </div>
);

export default Header;
