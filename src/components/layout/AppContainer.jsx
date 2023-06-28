import React from 'react';

import "../../styles/main.sass"

const AppContainer = (props) => {
  return (
    <div className="app__container">
      {props.children}
    </div>
  )
}

export default AppContainer;