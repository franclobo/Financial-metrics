import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FetchCryptos } from '../redux/cryptocurrency';

const Crypto = (props) => {
  const {
    name, change, price,
  } = props;

  return (
    <li>
      <NavLink to={`/${name}`}>
        <div className="cryptoList">
          <h4>
            {name}
          </h4>
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
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
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
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

Crypto.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
};
