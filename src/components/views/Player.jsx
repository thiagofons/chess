import React from 'react';

import playerImg from "../../img/icons/player.svg"

import "../../styles/main.sass"

const Player = ({side, name, isCurrPlayer}) => {
  return (
    <div className={`player__stats ${side === "left" ? "player__left" : "player__right"}`}>
      <div className="player__image">
        <img src={playerImg} alt={name} />
      </div>
      <div className="player__info">
        <div className="player__name">{name}</div>
        {
          isCurrPlayer &&
          <span>Sua vez!</span>
        }
      </div>
    </div>
  )
}

export default Player;