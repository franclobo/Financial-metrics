import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Col, Typography } from 'antd';

const { Title } = Typography;

export default function Details() {
  const { name } = useParams();
  const cryptos = useSelector((state) => state.cryptos);
  const PrintCrypto = cryptos.filter((element) => element.name === name);
  const Crypto = PrintCrypto[0];

  if (PrintCrypto !== undefined) {
    return (
      <div className="containerDetails">
        <Col className="coin-heading-container">
          <Title level={2} className="coin-name">
            {Crypto.name}
            (
            {Crypto.symbol}
            )
            Price
          </Title>
          <p>
            $
            {Crypto.price}
            &nbsp; live price in US Dollar
            (USD). View value statistics, market cap and supply.
          </p>
        </Col>
      </div>
    );
  }

  return (
    <div>
      <NavLink to="/">
        <button type="button">Adios</button>
      </NavLink>
      <div>
        <h4>Please try again</h4>
      </div>
    </div>
  );
}
