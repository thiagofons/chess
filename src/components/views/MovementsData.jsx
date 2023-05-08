import React from 'react';

import "../../styles/main.sass"

import rollBack from "../../img/icons/rotate-left-arrow.svg"
import forward from "../../img/icons/rotate-right-arrow.svg"

const MovementsData = () => {
  return (
    <div className="movements__data">
      
      <div className="movements__data__header">
        <span>white</span>
        <span>black</span>
      </div>
      <div className="movements__data__content">
        <span className="movements__data__content__number">1</span>
        <div className="movements__data__content__row">
          <div className="white__movement">
            1
          </div>
          <div className="black__movement">
            2
          </div>
        </div>
      </div>
      <div className="movements__data__controls">
        <div className="rollback">
          <img src={rollBack} alt="" />
        </div>
        <div className="forward">
          <img src={forward} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MovementsData;