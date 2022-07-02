import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
   
    fetch(url, { signal: abortController.signal })
      .then(res => {
        if (!res.ok) throw new Error('Error from server');
        return res.json();
      }) 
      .then(data => {
        setData(data.data);
        setLoading(false);
      })
      .catch(e => {
        if ('AbortError' === e.name) {
          console.log('AbortError');
          return;
        }
        setError(e.message);
        setLoading(false);
      });
    return () => {
      abortController.abort(); 
      setData(null);
      setError(null);
      setLoading(true);
    }; 
  }, [url]);

  return { data, error, loading }; 
 
};

export default useFetch;