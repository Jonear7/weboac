import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MyApp from "./Path";
import Header from "../layout/header"; 

function Application() {
  const location = useLocation();
  const pathName = location.pathname;
  const [, setPath] = useState(pathName);

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  return (
    <>
      <Header />
      <main>
        <MyApp path={pathName} />
      </main>
    </>
  );
}

export default Application;
