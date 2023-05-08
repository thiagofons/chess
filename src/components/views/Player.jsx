import React from 'react';

import playerImg from "../../img/icons/player.svg"

import "../../styles/main.sass"

const Player = ({side, name}) => {
  return (
    <div className={`player__stats ${side === "left" ? "player__left" : "player__right"}`}>
      <div className="player__image">
        <img src={playerImg} alt="" />
      </div>
      <div className="player__info">
        <div className="player__name">{name}</div>
        <div className="player__time__left">
          <p>time left:</p>
          <span>00:00:00</span>
        </div>
      </div>
    </div>
  )
}

export default Player;