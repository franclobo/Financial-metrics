import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FetchCryptos } from '../redux/cryptocurrency';

const Crypto = (props) => {
  const {
    name, change, price,
  } = props;

  return (
    <li>
      <NavLink to={`/${name}`}>
        <div className="cryptoList">
          <h2>
            {name}
          </h2>
          <p>
            change:
            {change}
          </p>
          <p>
            price:
            {price}
          </p>
        </div>
      </NavLink>
    </li>
  );
};

export default function Homepage() {
  const cryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();
  const [filterCrypto, setFilter] = useState([]);

  if (cryptos.length === 0) {
    dispatch(FetchCryptos());
  }

  const filterHandler = (e) => {
    if (e.target.value === 'Most Price') {
      setFilter(cryptos.filter((cryp) => cryp.price >= 3));
    } else if (e.target.value === 'Most Change') {
      setFilter(cryptos.filter((cryp) => cryp.change >= 1));
    } else if (e.target.value === 'Least Price') {
      setFilter(cryptos.filter((cryp) => cryp.price < 3));
    } else if (e.target.value === 'Least Change') {
      setFilter(cryptos.filter((cryp) => cryp.change < 1));
    } else {
      setFilter(cryptos);
    }
  };

  return (
    <div className="container">
      <div className="selector">
        <select name="filter" id="filter" onInput={(e) => filterHandler(e)}>
          <option defaultValue="Most Price">Most Price</option>
          <option value="Most Change">Most Change</option>
          <option value="Least Price">Least Price</option>
          <option value="Least Change">Least Change</option>
        </select>
      </div>
      <ul className="cryptos">
        {filterCrypto.length > 0
          && filterCrypto.map((crypto) => (
            <Crypto
              key={crypto.name}
              name={crypto.name}
              price={crypto.price}
              change={crypto.change}
            />
          ))}
        {filterCrypto.length === 0
          && cryptos.map((crypto) => (
            <Crypto
              key={crypto.name}
              name={crypto.name}
              price={crypto.price}
              change={crypto.change}
            />
          ))}
      </ul>
    </div>
  );
}

Crypto.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
};
