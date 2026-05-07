
import { Col } from "react-bootstrap"

function Actor({
    id,
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
            <div className="border rounded-bottom bg-dark text-white d-flex flex-column p-2 text-center actor-card">
                <img className="img-fluid actor-image" src={image} />
                <h3 className="actor-name">{name}</h3>
                <hr />
                <p className="my-0">Nascita: {birthYear} {deathYear && ` - Morte: ${deathYear}`}</p>
                <p className="my-0">Nazionalità: {nationality} </p>
                <hr />
                {
                    <div className="accordion" id={`accordion${id}`} data-bs-theme="dark">
                        <div className="accordion-item">
                            <h4 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="true" aria-controls={`collapse${id}`}>
                                    Mostra Altro
                                </button>
                            </h4>
                            <div id={`collapse${id}`} className="accordion-collapse collapse" data-bs-parent={`#accordion${id}`}>
                                <div className="accordion-body">
                                    <p>{biography}</p>
                                    {awards[0] !== "None" && <p className="mb-0">Riconoscimenti: </p>}
                                    {awards[0] !== "None" &&
                                        <ul className="list-group" data-bs-theme="dark">
                                            {awards.map(award => <li key={award} className="list-group-item">{award}</li>)}
                                        </ul>
                                    }
                                    <hr />
                                    <p className="mb-0">Film più famosi:</p>
                                    <ul className="list-group" data-bs-theme="dark">
                                        {knownFor.map(movie => <li key={movie} className="list-group-item">{movie}</li>)}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                }
            </div>
        </Col>
    )
}

export default Actor