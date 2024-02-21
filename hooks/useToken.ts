import { useCallback, useEffect, useState } from 'react';
import { isClient } from 'utils/utils';

const TOKEN_KEY = 'Authorization';

export const getCurrentToken = () => {
  return isClient() ? localStorage.getItem(TOKEN_KEY) : null;
}

const useToken = () => {
  const currentToken = getCurrentToken();
  const [token, setToken] = useState<string | null>(null);
  const handleTokenChange = useCallback((token: string | null) => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
    setToken(token);
  }, []);

  useEffect(() => {
    setToken(currentToken);
  }, [currentToken]);

  return {
    token,
    setToken: handleTokenChange,
  };
};

export default useToken;