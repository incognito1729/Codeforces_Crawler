import React from "react";
import Card from "./Card";

function BasicInfo(props) {
  return (
    <Card>
      {console.log(props.handle)}
      <h1>{props.handle}</h1>
      <p>{props.rating}</p>
      <p>{props.rank}</p>
    </Card>
  );
}

export default BasicInfo;
