import reducer from './cryptocurrency';

describe('Cryptocurrency reducer test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it('should return the state with the new cryptos', () => {
    const action = {
      type: 'MOST_GAINER',
      payload: [{
        symbol: 'BTC',
        name: 'Bitcoin',
        change: '+0.01',
        price: '$12,000.00',
      }],
    };
    expect(reducer([], action)).toEqual([{
      symbol: 'BTC',
      name: 'Bitcoin',
      change: '+0.01',
      price: '$12,000.00',
    }]);
  });
});
