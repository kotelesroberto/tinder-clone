import React, { useState } from "react";
import "./TinderCards.css";

import TinderCard from "react-tinder-card";
import Moment from "react-moment";
import "moment-timezone";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
      distance: 6,
      info: "Cardiff University",
      lastActive: Date.now(),
    },
    {
      name: "Walt Disney",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG",
      distance: 15,
      info: "",
      lastActive: Date.now(),
    },
    {
      name: "Mona",
      url:
        "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
      distance: "",
      info: "Cardiff University",
      lastActive: -14220921600,
    },
    {
      name: "Vincent",
      url:
        "https://www.biography.com/.image/t_share/MTY2NTIzMzc4MTI2MDM4MjM5/vincent_van_gogh_self_portrait_painting_musee_dorsay_via_wikimedia_commons_promojpg.jpg",
      distance: 12,
      info: "",
      lastActive: 1599696000,
    },
    {
      name: "Pablo",
      url:
        "https://www.biography.com/.image/t_share/MTY2NTIzNTAyNjgwMDg5ODQy/pablo-picasso-at-his-home-in-cannes-circa-1960-photo-by-popperfoto_getty-images.jpg",
      distance: 8,
      info: "",
      lastActive: Date.now(),
    },
    {
      name: "Salvador",
      url:
        "https://m.media-amazon.com/images/M/MV5BNTc4MTE0MDE5OF5BMl5BanBnXkFtZTYwMDMxNjI2._V1_UY1200_CR78,0,630,1200_AL_.jpg",
      distance: 1234,
      info: "",
      lastActive: Date.now() - 6 * 60 * 1000,
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };
  const onCardLeftScreen = (name) => {
    console.log(name + " left the screen");
  };

  let timeNow = Date.now();
  const timeOnline = 5 * 60 * 1000; // 5 minutes
  const timeRecently = 60 * 60 * 1000; // 60 minutes

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => onCardLeftScreen(person.name)}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: "url(" + person.url + ")" }}
              className="card"
            >
              <div className="tinderCards__container">
                <h3 className="tinderCards__name">{person.name}</h3>
                <div className="tinderCards__info">
                  {person.info && (
                    <span className="tinderCards__description">
                      {person.info}
                    </span>
                  )}

                  {person.lastActive && (
                    <span className="tinderCards__lastActive">
                      {timeNow - person.lastActive < timeOnline ? (
                        <p className="tinderCards__iconOnline">Online</p>
                      ) : timeNow - person.lastActive < timeRecently ? (
                        <p className="tinderCards__iconOnline">
                          Recently Active
                        </p>
                      ) : (
                        <Moment interval={30000} fromNow unix>
                          {person.lastActive}
                        </Moment>
                      )}
                    </span>
                  )}

                  {person.distance && (
                    <span className="tinderCards__distance">
                      <LocationOnIcon className="tinderCards__iconLocation" />
                      {person.distance}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
