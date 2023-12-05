import React from "react";

// function Greet(){
//     return <h1>Hello Manoj</h1>;
// }

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} cast: {props.hero}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
