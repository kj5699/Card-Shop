import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { Route, Routes} from 'react-router';
import { useState } from 'react';
import ListingPage from './pages/Listing';
import SummaryPage from './pages/Summary';
import Layout from './components/Layout';

function App() {
  const routes = (
      <Routes>
        <Route path="/summary" element={<SummaryPage  />} ></Route>
        <Route path="/" element={<ListingPage />} ></Route>
      </Routes>
  )
  return (
    <BrowserRouter >
    <div className="App">
      <Layout>
      {routes}
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
