import { Container } from "react-bootstrap";

function Header() {
    return (
        <header className="bg-dark py-2 border-bottom border-danger mb-5">
            <Container >
                <h1 className="text-center text-white mx-auto">Your favourite Actors</h1>
            </Container>
        </header>
    )
}

export default Header