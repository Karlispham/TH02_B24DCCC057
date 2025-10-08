import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Country } from '../types/Country';

const CountryDetail: React.FC = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => setCountry(res.data[0]))
      .catch((err) => console.error(err));
  }, [name]);

  if (!country) return <div>Đang tải...</div>;

  return (
    <div>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt="flag" width={100} />
      <p>Dân số: {country.population.toLocaleString()}</p>
      <p>Khu vực: {country.region}</p>
    </div>
  );
};

export default CountryDetail;
