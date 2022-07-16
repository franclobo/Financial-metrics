import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from '../redux/configureStore';
import Homepage from './Homepage';

describe('Components Test', () => {
  test('Homepage Test', () => {
    const store = configureStore;
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Homepage />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
