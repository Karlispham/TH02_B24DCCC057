import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountrySearch from './components/CountrySearch/CountrySearch';
import CountryDetail from './pages/CountryDetail';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountrySearch />} />
        <Route path="/country/:name" element={<CountryDetail />} />
        <Route path="/currency" element={<CurrencyConverter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
