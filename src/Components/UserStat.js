import React from "react";

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

  const language = new Set();
  const programmingLanguage = new Map();
  const acceptedSubmission = () => {
    let counter = 0;
    props.submission["result"].map((chk) => {
      if (programmingLanguage.has(chk["programmingLanguage"])) {
        language.add(chk["programmingLanguage"]);
        let curr = programmingLanguage.get(chk["programmingLanguage"]);
        curr += 1;
        programmingLanguage.set(chk["programmingLanguage"], curr);
      } else {
        programmingLanguage.set(chk["programmingLanguage"], 1);
      }
      if (chk["verdict"] === "OK") {
        counter += 1;
        problemLevel[chk["problem"]["index"]] += 1;
        solved.add(chk["problem"]["name"]);
      } else {
        if (solved.has(chk["problem"]["name"]) === false) {
          unsolved.add(chk["problem"]["name"]);
        }
      }
      return counter;
    });
  };
  const languages = language.forEach((key) => {
    // {console.log(key)}
    return <p>{key}</p>;
  });
  console.log(languages);
  return (
    <div>
      <p>Total Accepted Solution: {acceptedSubmission()}</p>
      <p>A: {problemLevel["A"]}</p>
      <p>B: {problemLevel["B"]}</p>
      <p>C: {problemLevel["C"]}</p>
      <p>D: {problemLevel["D"]}</p>
      <p>E: {problemLevel["E"]}</p>
      <p>F: {problemLevel["F"]}</p>
      <p>Unsolved: {unsolved.size}</p>
      <p>{programmingLanguage.size}</p>
      <div>
        {language.size}
        {language.forEach((value, key) => {
          return value;
        })}
      </div>
    </div>
  );
}

export default UserStat;
