import React from 'react';
import { headCells } from '../../../constants/headCells';
import { MainProps } from '../../../models/interface_type';
import { useAppDispatch } from '../../../hooks/redux';
import { commonActions } from '../../../store/reducers/common';

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
            <td>{currency.priceUsd}</td>
            <td>{currency.marketCapUsd}</td>
            <td>{currency.vwap24Hr}</td>
            <td>{currency.supply}</td>
            <td>{currency.volumeUsd24Hr}</td>
            <td>{currency.changePercent24Hr}</td>
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
