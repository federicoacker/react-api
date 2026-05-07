import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { useEffect } from "react";
import { initActors } from "./utils/apiData.js";

function App() {
  const [actorArray, setActorArray] = useState([]);
  console.log(actorArray);

  useEffect(
    () => {
      initActors().then(
        unifiedActorArray => {
          setActorArray(unifiedActorArray);
        }
      ).catch(
        error => {
          console.log(error);
        }
      );
    },
    []);

  return (
    <>
      <Header />
      <Main actorArray={ actorArray }/>
    </>
  );
}
export default App;
