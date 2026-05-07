import { Container, Row } from "react-bootstrap"
import ActorList from "./ActorList.jsx";

function Main({actorArray, loadingError}) {
  return (
    <Container>
        <Row>
            {loadingError.errorState && <h1>{loadingError.errorMessage}</h1>}
           {(actorArray.length!==0 && !loadingError.errorState) && <ActorList actorArray={ actorArray }/>} 
        </Row>
    </Container>
  )
}

export default Main