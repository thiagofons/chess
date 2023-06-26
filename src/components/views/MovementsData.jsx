import React from 'react';

import "../../styles/main.sass"
import { Row } from 'react-bootstrap';

import rollBack from "../../img/icons/rotate-left-arrow.svg"
import forward from "../../img/icons/rotate-right-arrow.svg"

const MovementsData = ({moves}) => {
  return (
    <div className="movements__data">
      
      <div className="movements__data__header">
        <span>white</span>
        <span>black</span>
      </div>
      <div className="movements__data__content">
        <Row>1</Row>
        {/* <span className="movements__data__content__number">1</span>
        <div className="movements__data__content__row">
          <div className="white__movement">
            1
          </div>
          <div className="black__movement">
            2
          </div>
        </div>
        <div className="movements__data__content__row">
          <div className="white__movement">
            3
          </div>
          <div className="black__movement">
            4
          </div>
        </div>
        <div className="movements__data__content__row">
          <div className="white__movement">
            5
          </div>
          <div className="black__movement">
            6
          </div>
        </div> */}
      </div>
      {/* <div className="movements__data__controls">
        <div className="rollback">
          <img src={rollBack} alt="" />
        </div>
        <div className="forward">
          <img src={forward} alt="" />
        </div>
      </div> */}
    </div>
  )
}

export default MovementsData;