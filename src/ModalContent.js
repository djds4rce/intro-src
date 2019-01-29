import React from "react";

const ModalContent = props => (
  <React.Fragment>
    <h1> Would you like to adopt {name}</h1>
    <div className="buttons">
      <button onClick={props.toggleModal}>Yes</button>
      <button onClick={props.toggleModal}>No</button>
    </div>
  </React.Fragment>
);

export default ModalContent;
