import Actor from "./Actor"

function ActorList({actorArray}) {
  return (
    actorArray.map(actor => <Actor
        key={ actor.keyId }
        id={ actor.keyId }
        name={ actor.name }
        birthYear={ actor.birth_year }
        deathYear={ actor.death_year }
        nationality={ actor.nationality }
        biography={ actor.biography }
        image={ actor.image }
        awards={ actor.awards }
        knownFor={ actor.known_for }
    />)
  );
}

export default ActorList