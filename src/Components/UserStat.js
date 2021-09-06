import React from "react";
import Card from "./Card";
import ProblemLevel from "./ProblemLevel";

function UserStat(props) {
  let problemLevel = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0
  };
  const unsolved = new Set();
  const solved = new Set();
  const programmingLanguage = new Map();
  const acceptedSubmission = () => {
    let counter = 0;
    console.log(props.submission);
    props.submission["result"].map((chk) => {
      if (programmingLanguage.has(chk["programmingLanguage"])) {
        let curr = programmingLanguage.get(chk["programmingLanguage"]);
        curr += 1;
        programmingLanguage.set(chk["programmingLanguage"], curr);
      } else {
        programmingLanguage.set(chk["programmingLanguage"], 1);
      }
      if (chk["verdict"] === "OK") {
        counter += 1;
        console.log(chk["problem"]["index"]);
        problemLevel[chk["problem"]["index"]] += 1;
        solved.add(chk["problem"]["name"]);
      } else {
        if (solved.has(chk["problem"]["name"]) === false) {
          unsolved.add(chk["problem"]["name"]);
        }
      }
    });
    return counter;
  };
  const langStat = programmingLanguage.forEach(function (value, key) {
    return `<p>${key}: ${value}</p>`;
  });
  return (
    <Card>
      <p>Total Accepted Solution: {acceptedSubmission()}</p>
      <p>A: {problemLevel["A"]}</p>
      <p>B: {problemLevel["B"]}</p>
      <p>C: {problemLevel["C"]}</p>
      <p>D: {problemLevel["D"]}</p>
      <p>E: {problemLevel["E"]}</p>
      <p>F: {problemLevel["F"]}</p>
      <ProblemLevel problemLevel={problemLevel} username={props.username} />
      {/* <p>Unsolved: {unsolved.size}</p>
      {programmingLanguage.size > 0 && langStat} */}
    </Card>
  );
}

export default UserStat;
