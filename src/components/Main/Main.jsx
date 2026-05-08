import { Container, Row } from "react-bootstrap"
import ActorList from "./ActorList.jsx";

function Main({ actorArray, loadingError }) {
    return (
        <main>
            <Container>
                <Row className="row-gap-4">
                    {loadingError.errorState && <h2>{loadingError.errorMessage}</h2>}
                    {(actorArray.length !== 0 && !loadingError.errorState) && <ActorList actorArray={actorArray} />}
                </Row>
            </Container>
        </main>
    )
}

export default Main