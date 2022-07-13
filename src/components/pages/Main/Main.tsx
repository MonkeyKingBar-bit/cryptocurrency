import React from 'react';
import { headCells } from '../../../constants/headCells';
import { MainProps } from '../../../models/interface_type';
import { useAppDispatch } from '../../../hooks/redux';
import { commonActions } from '../../../store/reducers/common';

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

const Main: React.FC<MainProps> = (props: MainProps) => {
  const { currencyList } = props;
  const dispatch = useAppDispatch();

  return (
    <table className="main">
      <thead>
        <tr className="main_table-head">
          { headCells.map((cell) => <th key={cell.id}>{cell.title}</th>) }
        </tr>
      </thead>
      <tbody>
        {currencyList.map((currency) => (
          <tr key={currency.id}>
            <td>{currency.rank}</td>
            <td>{currency.name}</td>
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
  );
};

export default Main;
