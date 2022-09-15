import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Renderer from 'react-test-renderer';
import Navigation from '../components/navigation/Navigation';

function MockHeader() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

it('Renders correctly', () => {
  const tree = Renderer
    .create(<MockHeader />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
