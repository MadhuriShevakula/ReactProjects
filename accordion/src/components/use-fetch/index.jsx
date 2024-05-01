import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setPending(true);

    try {
      const response = await axios.get(url, { ...options });
      if (response.status < 200 || response.status >= 300)
        throw new Error(response.statusText || "req failed");
      console.log(`response ${response}`);
      const result = await response.data;
      console.log(`result ${result}`);
      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      setError(`${error}. Some Error Occured`);
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, pending };
};

export default useFetch;
