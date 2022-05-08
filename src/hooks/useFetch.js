import {useState, useEffect} from 'react';
import axios from 'axios';
const URL = 'https://api.tfl.gov.uk/Line/';
const app_key = 'd2df52417afb411880f925cb0e0e5f80';
const KEY = `app_id=65e3344657ea48dc9b1315fbaeb66181&app_key=${app_key}`;

const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL}${url}${KEY}`);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, error, data};
};

export default useFetch;