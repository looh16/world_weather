import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Countries from '../components/country/Countries';

test('renders correctly', () => {
  const country = {
    name : {
      official : "Mozambique"
    },
    continents: ["Africa","Asia"],
    "flags": {
      "png": "https://flagcdn.com/w320/fi.png",
    },
  }
  const tree = Renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Countries country={country} />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
