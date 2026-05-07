import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { useEffect } from "react";
import { initActors } from "./utils/apiData.js";

function App() {
  const [actorArray, setActorArray] = useState([]);

  useEffect(() => {
    initActors();
  }

  );

  return (
    <>
    <Header/>
    <Main/>
    </>
  );
}
export default App;
