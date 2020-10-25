import React, { uses } from "react";

const Box = (props) => {
  return (
    <div>
      {props.stateChat.map((item) => (
        <div key={item.id}>
          <p>saxeli {item.name}</p>
          <p>gvari: {item.surname}</p>
          <img src={item.src}></img>
        </div>
      ))}
    </div>
  );
};
export default Box;
