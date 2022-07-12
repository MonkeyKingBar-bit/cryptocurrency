import React from 'react';
import { headCells } from '../../../constants/headCells';
import { MainProps } from '../../../common/interface_type';

const Main: React.FC<MainProps> = (props: MainProps) => {
  const { currencyList } = props;
  return (
    <table className="main">
      <thead>
        <tr className="main_table-head">
          {headCells.map((cell) => <th key={cell.id}>{cell.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {currencyList.map((currency) => (
          <tr key={currency.id}>
            <td>{currency.rank}</td>
            <td>{currency.name}</td>
            <td>{currency.priceUsd}</td>
            <td>{currency.marketCapUsd}</td>
            <td>{currency.vwap24Hr}</td>
            <td>{currency.supply}</td>
            <td>{currency.volumeUsd24Hr}</td>
            <td>{currency.changePercent24Hr}</td>
            <td>
              <button type="submit">+</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Main;
