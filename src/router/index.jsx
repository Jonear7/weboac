import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MyApp from './Path';

function Application() {
  const location = useLocation();
  const pathName = location.pathname;
  const [, setPath] = useState(pathName);

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  return <MyApp />;
}

export default Application;
