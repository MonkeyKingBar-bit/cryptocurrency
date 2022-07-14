import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { headCells } from '../../../constants/headCells';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { commonActions } from '../../../store/reducers/common';
import { currencyActions } from '../../../store/reducers/currencySlice';

const roundedNumber = (n: number) => {
  const format = (toCut: number, letter: string) => String(n).slice(0, -toCut) + letter;
  if (n > 999999) {
    return format(6, 'M');
  }
  if (n > 999) {
    return format(3, 'K');
  }
  return n;
};

const pageSize = 10;

const Main = () => {
  const dispatch = useAppDispatch();
  const { currencies, paginatedCurrencies, currentPage } = useAppSelector((state) => state.currency);

  const pageCount = currencies ? Math.ceil(currencies.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNum: number) => {
    dispatch(currencyActions.setCurrentPage(pageNum));
    const startIndex = (pageNum - 1) * pageSize;
    const paginatedCurrency = _(currencies).slice(startIndex).take(pageSize).value();
    dispatch((currencyActions.setPaginationCurrencies(paginatedCurrency)));
  };

  return (
    <main className="main">
      <table className="main-table">
        <thead>
          <tr className="main-table_head">
            {headCells.map((cell) => <th key={cell.id}>{cell.title}</th>)}
          </tr>
        </thead>
        <tbody>
          {paginatedCurrencies.map((currency: any) => (
            <tr key={currency.id}>
              <td>{currency.rank}</td>
              <td><Link to="/details">{currency.name}</Link></td>
              <td>
                &#36;
                {` ${Math.round(currency.priceUsd * 100) / 100}`}
              </td>
              <td>
                &#36;
                {` ${Math.round(currency.marketCapUsd * 100) / 100}`}
              </td>
              <td>
                &#36;
                {` ${Math.round(currency.vwap24Hr * 100) / 100}`}
              </td>
              <td>{roundedNumber(Math.round(currency.supply * 100) / 100)}</td>
              <td>
                &#36;&#32;
                {roundedNumber(Math.round(currency.volumeUsd24Hr * 100) / 100)}
              </td>
              <td>
                {`${Math.round(currency.changePercent24Hr * 100) / 100} `}
                &#37;
              </td>
              <td>
                <button type="submit" onClick={() => dispatch(commonActions.modalActive())}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="main-pagination">
          {pages.map((page) => (
            <li
              key={uuidv4()}
              className={currentPage === page ? 'main-pagination_current' : 'main-pagination_page'}
              onClick={() => pagination(page)}
              aria-hidden="true"
            >
              {page}
            </li>
          ))}
        </ul>
      </nav>
    </main>

  );
};

export default Main;
