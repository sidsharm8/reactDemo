import React from "react";
import "./character-card.styles.scss";

const CharacterCard = ({ character }) => {
  const diffYears = (date) => {
    return (
      Math.abs((new Date()).getUTCFullYear() - new Date(date).getUTCFullYear())
    );
  };
  return (
    <div className="cardContainer">
      <div className="cardProfile">
        <img
          className="cardProfileImage"
          src={character.image}
          alt="[TODO ALT TEXT]"
        />
        <div className="cardProfileName">
          <div className="cardProfileNameText">{character.name}</div>
          <div className="cardProfileMeta">
            <span>id: {character.id} - </span>
            <span>created {diffYears(character.created)} years ago</span>
          </div>
        </div>
      </div>
      <div className="cardInfo">
        <div className="cardInfoRow">
          <div className="cardInfoColumn1">Status</div>
          <div className="cardInfoColumn2">{character.status}</div>
        </div>
        <div className="cardInfoRow">
          <div className="cardInfoColumn1">Species</div>
          <div className="cardInfoColumn2">{character.species}</div>
        </div>
        <div className="cardInfoRow">
          <div className="cardInfoColumn1">Gender</div>
          <div className="cardInfoColumn2">{character.gender}</div>
        </div>
        <div className="cardInfoRow">
          <div className="cardInfoColumn1">Origin</div>
          <div className="cardInfoColumn2">{character.origin.name}</div>
        </div>
        <div className="cardInfoRow">
          <div className="cardInfoColumn1">Last Location</div>
          <div className="cardInfoColumn2">{character.location.name}</div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
