'use client'

import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
import PlanetWishlistItem from './PlanetWishlistItem';

const planetDescriptions = {
  Europa:
    'Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.',
  Mars: 'Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.',
  Moon: "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
  Titan:
    "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
};

const Description = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const onAddOrRemovePlanet = name => {
    setSelectedPlanets(prev => {
      if (prev.includes(name)) {
        return prev.filter(planet => planet !== name);
      } else {
        return [...prev, name];
      }
    });
  };

  const numberOfPlanets = selectedPlanets.length;

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {numberOfPlanets} in your wishlist</p>
          )}
          <div className={styles.wishlistList}>
            {selectedPlanets.map(planet => (
              <PlanetWishlistItem
                key={planet}
                name={planet}
                onRemove={() => onAddOrRemovePlanet(planet)}
                thumbnail={`/destination/image-${planet.toLowerCase()}.png`}
              />
            ))}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {['Europa', 'Moon', 'Mars', 'Titan'].map((planet, index) => (
            <div key={index} className={styles.planetCard}>
              <img
                className={styles.planetThumbnail}
                src={`/destination/image-${planet.toLowerCase()}.png`}
                alt={planet}
              />
              <div className={styles.planetDescription}>
                <h2>
                  {planet}{' '}
                  {selectedPlanets.includes(planet) ? '- SELECTED' : ''}
                </h2>
                <p>{planetDescriptions[planet]}</p>
              </div>
              <button
                className="roundButton"
                onClick={() => onAddOrRemovePlanet(planet)}
              >
                {selectedPlanets.includes(planet) ? 'REMOVE' : 'ADD PLANET'}
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Description;
