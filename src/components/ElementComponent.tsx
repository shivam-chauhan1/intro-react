import React, { JSX } from "react";

const element: JSX.Element = <h1>Hello, World!</h1>;

const ElementComponent: React.FC = () => {
  return <div>{element}</div>;
};

export default ElementComponent;
