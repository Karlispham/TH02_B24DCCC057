import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Country } from '../../types/Country';
import { Link } from 'react-router-dom';

const CountrySearch: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,flags,population,region')
      .then((res) => setCountries(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Tra cứu Quốc gia</h2>
      <input
        type="text"
        placeholder="Tìm theo tên quốc gia..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map((country) => (
          <li key={country.name.common}>
            <Link to={`/country/${country.name.common}`}>
              <img src={country.flags.png} alt="flag" width={50} />
              <div>{country.name.common}</div>
              <div>Dân số: {country.population.toLocaleString()}</div>
              <div>Khu vực: {country.region}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountrySearch;
