import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CurrencyRates } from '../../types/Currency';

const CurrencyConverter: React.FC = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [rates, setRates] = useState<CurrencyRates>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://open.er-api.com/v6/latest/${baseCurrency}`)
      .then((res) => {
        setRates(res.data.rates);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error(err);
        setLoading(false);
      });
  }, [baseCurrency]);

  return (
    <div>
      <h2>Quy đổi tỉ giá tiền tệ</h2>
      <input
        type="text"
        value={baseCurrency}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setBaseCurrency(e.target.value.toUpperCase())
        }
        placeholder="Nhập đơn vị tiền tệ gốc (VD: USD)"
      />
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <ul>
          {Object.entries(rates).map(([currency, rate]) => (
            <li key={currency}>
              {currency}: {rate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencyConverter;
