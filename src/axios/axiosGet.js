import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const axiosGet = (url, refetch) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      headers: {'Content-Type': 'application/json'},
    };
    const loadData = async () => {
      try {
        const response = await axios.get(url, options);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        const errorJson = JSON.parse(JSON.stringify(error));
        alert(errorJson.message);
        throw error;
      }
    };
    loadData();
  }, [url, refetch]);

  return [data, loading];
};
