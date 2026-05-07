import { Container, Row } from "react-bootstrap"
import ActorList from "./ActorList.jsx";

function Main({actorArray}) {
  return (
    <Container>
        <Row>
           {actorArray.length !== 0 && <ActorList actorArray = {actorArray} />} 
        </Row>
    </Container>
  )
}

export default Main