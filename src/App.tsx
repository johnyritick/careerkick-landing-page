import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return <React.Fragment>

    <Routes>
      <Route path='/' element={<Suspense fallback={<></>}><Home /></Suspense>} />
    </Routes>
  </React.Fragment>
}

export default App;
