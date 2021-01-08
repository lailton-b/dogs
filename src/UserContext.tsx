import React from 'react';
import { useHistory } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET, USER_POST } from './Api';

interface IUserContext {
  user: IUserInterface;
  data: null | string;
  loading: boolean;
  error: null | string;
  userGet(token: string): Promise<void>;
  userToken(username: string, password: string): Promise<void>;
  userPost(username: string, email: string, password: string): Promise<void>;
  userLogout(): void;
}

interface IUserInterface {
  logged: boolean,
  id: number | null,
  username: string | null,
  nome: string | null,
  email: string | null
}

const UserContext = React.createContext({} as IUserContext);

const UserProvider: React.FC = ({ children }) => {
  const history = useHistory();

  /* useState */
  const [ user, setUser ] = React.useState<IUserInterface>({ logged: false,  id: null, username: null, nome: null, email: null });
  const [ data, setData ] = React.useState<null | string>(null);
  const [ loading, setLoading ] = React.useState<boolean>(false);
  const [ error, setError ] = React.useState<null | string>(null);

  /* User Token */
  const userToken = async (username: string, password: string) => {
    let json = null;

    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      json = await response.json();

      if (response.ok === false) throw new Error(json.message);
      else {
        json = json.token;
        window.localStorage.setItem('@dogs:token', json);
        userGet(json);
      }
    } catch(error) {
      setError(error.message);
      json = null;
    } finally {
      setLoading(false);
      setData(json);
    }
  };

  /* User Post */
  const userPost = async (username: string, email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = USER_POST({ username, password, email });
      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) throw new Error(json.message); 
      else {
        await userToken(username, password);
        history.push('/')
      }
    } catch(error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  /* User Get*/
  const userGet = async (token: string) => {
    let json = null;

    try {
      setError(null);
      setLoading(true);

      const { url, options} = USER_GET(token);
      const response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) throw new Error(json.message);
    } catch(error) {
      setError(error.message);
      json = null;
    } finally {
      setUser({ logged: true, ...json });
      setLoading(false);
    }
  }

  /* Logout */
  const userLogout = () => {
    setLoading(true);
    localStorage.removeItem('@dogs:token');
    setUser({ logged: false,  id: null, username: null, nome: null, email: null });
    setData(null);
    setError(null);
    setLoading(false);
  }

  /* Token Validate Post */
  const tokenValidate = React.useCallback(async (token: string) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_VALIDATE_POST(token);
      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) throw new Error(`Error - ${json.code}: ${json.message}`);
      else {
        await userGet(token);
      }
    } catch(error) {
      history.push('/login');
    } finally {
      setLoading(false);
    }
  }, [history]);

  /* Auto login */
  React.useEffect(() => {
    const token = localStorage.getItem('@dogs:token');

    if (token) {
      tokenValidate(token);
    } else if (!token) {
      if (history.location.pathname === '/') history.push('/login');
      if (history.location.pathname === '/conta') history.push('/login');
      if (history.location.pathname === '/conta/estatisticas') history.push('/login');
      if (history.location.pathname === '/conta/postar') history.push('/login');
    };
  }, [tokenValidate, history]);

  return (
    <UserContext.Provider value={{ data, user, loading, error, userToken, userPost, userGet, userLogout }}>
      { children }
    </UserContext.Provider>
  )
}

const useUserContext = (): IUserContext => {
  const context = React.useContext(UserContext);

  return context;
}

export { UserProvider, useUserContext };
