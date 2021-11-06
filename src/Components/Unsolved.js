import React from "react";
import Card from "./Card";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Unsolved.css"


function Unsolved(props) {
  const links = props.unsolvedId.map((e) => {
    if (e.id < 100000)
      return (
        <a className="unsolved__link"
          href={`https://codeforces.com/problemset/problem/${e.id}/${e.index}`}
        >
          {e.id}-{e.index}
          <br />
        </a>
      );
    return (
      <a className="unsolved__link" href={`https://codeforces.com/gym/${e.id}/problem/${e.index}`}>
        {e.id}-{e.index}
        <br />
      </a>
    );
  });
  const unsolve=links.map((value,ind)=>(
    // <ListGroup horizontal={'lg'} className="my-2" >
      <ListGroup.Item >{value}</ListGroup.Item>
    // </ListGroup>
  ))
  return (
    <Card >
      <div>Unsolved Problems</div>
      <div className="unsolved">
        {/* <ListGroup horizontal={'md'} className="my-3" > */}
          {links}
        {/* </ListGroup> */}
      </div>
    </Card>
  );
}

export default Unsolved;
