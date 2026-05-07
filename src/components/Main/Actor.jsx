import { Col } from "react-bootstrap"

function Actor({
    name,
    birthYear,
    deathYear,
    nationality,
    biography,
    image,
    awards,
    knownFor
}) {
    return (
        <Col xs={12} sm={12} md={6} lg={4}>
            <div className="border rounded-bottom bg-dark text-white d-flex flex-column p-2 text-center">
                <img className="img-fluid" src={image} />
                <h2>{name}</h2>
                <hr />
                <h4>Anno di Nascita: {birthYear} {deathYear && ` - Anno di Morte: ${deathYear}`}</h4>
                <p>Nazionalità: {nationality} </p>
                <hr />
                <p>{biography}</p>
                {awards[0] !== "None" && <p>Riconoscimenti: </p>}
                {awards[0] !== "None" &&
                    <ul>
                        {awards.map(award => <li key={award}>{award}</li>)}
                    </ul>
                }
                <p>Film più famosi:</p>
                <ul>
                    {knownFor.map(movie => <li key={movie}>{movie}</li>)}
                </ul>
            </div>
        </Col>
    )
}

export default Actor