import { useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

const useGetData = (path, queryData, optionData) => {
  const [apiData, setApiData] = useState([]);
  const [getData, { loading }, error] = useLazyQuery(path, {
    variables: {
      queryData,
      optionData
    },
    errorPolicy: 'all',
    fetchPolicy: 'network-only',
    onCompleted: (data) => setApiData(data)
  });

  useEffect(() => {
    getData();
  }, [getData]);
  return [apiData, getData, loading, error];
};

export default useGetData;
