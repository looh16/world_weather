import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Countries from './components/country/Countries';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Countries />
          }
        />
      </Routes>
    </div>
  </Router>
);

export default App;
