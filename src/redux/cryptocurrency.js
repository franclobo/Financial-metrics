const apiKey = 'abb73ff870a2497f15c15f76b46a63e9';
const urlGainers = `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${apiKey}`;
const urlLosers = `https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${apiKey}`;
const urlActive = `https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${apiKey}`;
const MOST_GAINER = 'MOST_GAINER';

const reducer = (state = [], action) => {
  switch (action.type) {
    case MOST_GAINER:
      return [...action.payload];
    default:
      return state;
  }
};

const GetCrypto = (cryptos) => ({
  type: MOST_GAINER,
  payload: cryptos,
});

export const FetchCryptos = () => (dispatch) => {
  const List = [];
  fetch(urlGainers, {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },

  })
    .then((response) => response.json())
    .then((result) => {
      result.forEach((element) => {
        List.push({
          symbol: element.symbol,
          name: element.name,
          change: Number(element.change),
          price: Number(element.price),
        });
      });
      dispatch(GetCrypto(List));
    });
  fetch(urlLosers, {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },

  })
    .then((response) => response.json())
    .then((result) => {
      result.forEach((element) => {
        List.push({
          symbol: element.symbol,
          name: element.name,
          change: Number(element.change),
          price: Number(element.price),
        });
      });
      dispatch(GetCrypto(List));
    });
  fetch(urlActive, {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },

  })
    .then((response) => response.json())
    .then((result) => {
      result.forEach((element) => {
        List.push({
          symbol: element.symbol,
          name: element.name,
          change: Number(element.change),
          price: Number(element.price),
        });
      });
      dispatch(GetCrypto(List));
    });
};

export default reducer;
