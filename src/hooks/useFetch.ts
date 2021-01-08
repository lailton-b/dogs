import React from 'react';

interface IUseFetch {
  data: {};
  loading: boolean;
  error: null | string;
  request(url: string, options: {}): Promise<IRequest>;
}

interface IRequest {
  response: Response | undefined;
  json: any;
}

const useFetch = (): IUseFetch => {
  const [ data, setData ] = React.useState<{}>({});
  const [ loading, setLoading ] = React.useState(false);
  const [ error, setError ] = React.useState<null | string>(null);

  const request = React.useCallback(
    async (url: string, options: {}): Promise<IRequest> => {
      let response;
      let json;

      try {
        setLoading(true);
        setError(null);
        
        response = await fetch(url, options);
        json = await response.json();

        if (!response.ok) throw new Error(json.message);
      } catch(error) {
        setError(error.message);
        json = null;
      } finally {
        setData(json);
        setLoading(false);
        return { response, json };
      }
  }, []);

  return { data, loading, error, request };
}

export default useFetch;