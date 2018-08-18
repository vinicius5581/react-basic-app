import React from "react";
import ChildComponent from "./ChildComponent";

const AnotherChildComponent = ({ people }) => {
  const peopleList = people.map(ppl => (
    <ChildComponent key={ppl.id} name={ppl.name} age={ppl.age} />
  ));
  return <div className="people-list">{peopleList}</div>;
};

export default AnotherChildComponent;
