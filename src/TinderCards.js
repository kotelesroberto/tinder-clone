import React, { useEffect, useState } from "react";
import "./TinderCards.css";

import axios from "./axios";

import TinderCard from "react-tinder-card";
import Moment from "react-moment";
import "moment-timezone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InfoIcon from "@material-ui/icons/Info";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/tinder/cards");
      console.log("req >> ", req);
      setPeople(req.data);
    };

    fetchData();
  }, []);

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
            // key={person.name}
            key={person._id}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => onCardLeftScreen(person.name)}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: "url(" + person.imgUrl + ")" }}
              className="card"
            >
              <div className="tinderCards__container">
                <h3 className="tinderCards__name">
                  {person.name}
                  <span>{person.age}</span>
                  <span className="tinderCards__iconInfo">
                    <InfoIcon fontSize="small" />
                  </span>
                  <span className="tinderCards__iconVerified">
                    <VerifiedUserIcon fontSize="small" />
                  </span>
                </h3>
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
                      {person.distance} km away
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
