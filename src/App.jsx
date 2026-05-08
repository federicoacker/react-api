import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { useEffect } from "react";
import { initActors } from "./utils/apiData.js";

function App() {
  const [actorArray, setActorArray] = useState([]);
  const [loadingError, setLoadingError] = useState({
    errorState: false,
    errorMessage: ""
  });

  useEffect(
    () => {
      initActors().then(
        unifiedActorArray => {
          setActorArray(unifiedActorArray);
        }
      ).catch(
        error => {
          console.error(error);
          setLoadingError({errorState:true, errorMessage:error.message});
        }
      );
    },
    []);

  return (
    <>
      <Header />
      <Main actorArray={ actorArray } loadingError={ loadingError }/>
    </>
  );
}
export default App;
