import reducer from './cryptocurrency';

describe('Cryptocurrency reducer test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  }).toEqual([]);

  it('should handle GET_CRYPTO', () => {
    expect(reducer([], {
      type: 'GET_CRYPTO',
      payload: [{
        symbol: 'BTC',
        name: 'Bitcoin',
        change: '+0.00',
        price: '$9,890.00',
      }],
    })).toEqual([{
      symbol: 'BTC',
      name: 'Bitcoin',
      change: '+0.00',
      price: '$9,890.00',
    }]);
  }).toEqual([{
    symbol: 'BTC',
    name: 'Bitcoin',
    change: '+0.00',
    price: '$9,890.00',
  }]);
});
