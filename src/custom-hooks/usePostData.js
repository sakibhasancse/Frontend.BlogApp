import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';

const usePostData = (path, inputData = {}) => {
  const [apiData, setApiData] = useState([]);
  const [getData, { loading }, error] = useMutation(path, {
    variables: {
      inputData
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

export default usePostData;
