import React from 'react';

import "../../styles/main.sass"

const Container = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}

export default Container;