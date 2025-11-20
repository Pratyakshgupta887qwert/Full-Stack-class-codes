import React from 'react';
function Mycomponents(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <h2>age {props.age}</h2>
      <h3>marks {props.marks}</h3>
      <h4> single {props.single} </h4>
    </div>
  );
}

export default Mycomponents;