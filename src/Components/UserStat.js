import React, { useEffect } from "react";
// import Card from "./Card";
import Charts from "./Charts";
import ProblemLevel from "./ProblemLevel";
import Unsolved from "./Unsolved";
import { CardGroup, Card , Alert} from "react-bootstrap";

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
  let problemUnsolvedLevel = {
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
  var unsolvedId = [];
  const rating = new Map();
  const solved = new Set();
  const programmingLanguage = new Map();
  const verdict = new Map();
  const tags = new Map();
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
      chk["problem"]["tags"].forEach((e) => {
        if (tags.has(e)) {
          let curr = tags.get(e);
          curr += 1;
          tags.set(e, curr);
        } else {
          tags.set(e, 1);
        }
      });
      if (verdict.has(chk["verdict"])) {
        let curr = verdict.get(chk["verdict"]);
        curr += 1;
        verdict.set(chk["verdict"], curr);
      } else {
        verdict.set(chk["verdict"], 1);
      }
      if (chk["verdict"] === "OK") {
        counter += 1;
        if (solved.has(chk["problem"]["name"]) === false) {
          if (rating.has(parseInt(chk["problem"]["rating"]))) {
            let curr = rating.get(parseInt(chk["problem"]["rating"]));
            curr += 1;
            rating.set(parseInt(chk["problem"]["rating"]), curr);
          } else {
            rating.set(parseInt(chk["problem"]["rating"]), 1);
          }
        }
        // console.log(chk["problem"]["index"]);
        if (
          chk["problem"]["index"] === "A1" ||
          chk["problem"]["index"] === "A2" ||
          chk["problem"]["index"] === "A"
        ) {
          problemLevel["A"] += 1;
        } else if (
          chk["problem"]["index"] === "B1" ||
          chk["problem"]["index"] === "B2" ||
          chk["problem"]["index"] === "B"
        ) {
          problemLevel["B"] += 1;
        } else if (
          chk["problem"]["index"] === "C1" ||
          chk["problem"]["index"] === "C2" ||
          chk["problem"]["index"] === "C"
        ) {
          problemLevel["C"] += 1;
        } else if (
          chk["problem"]["index"] === "D1" ||
          chk["problem"]["index"] === "D2" ||
          chk["problem"]["index"] === "D"
        ) {
          problemLevel["D"] += 1;
        } else if (
          chk["problem"]["index"] === "E1" ||
          chk["problem"]["index"] === "E2" ||
          chk["problem"]["index"] === "E"
        ) {
          problemLevel["E"] += 1;
        } else if (
          chk["problem"]["index"] === "F1" ||
          chk["problem"]["index"] === "F2" ||
          chk["problem"]["index"] ==="F"
        ) {
          problemLevel["F"] += 1;
        } else {
          problemLevel[chk["problem"]["index"]] += 1;
        }
        solved.add(chk["problem"]["name"]);
      } else {
        if (
          solved.has(chk["problem"]["name"]) === false &&
          unsolved.has(chk["problem"]["name"]) === false
        ) {
          if (
            chk["problem"]["index"] === "A1" ||
            chk["problem"]["index"] === "A2" ||
            chk["problem"]["index"] === "A"
          ) {
            problemUnsolvedLevel["A"] += 1;
          } else if (
            chk["problem"]["index"] === "B1" ||
            chk["problem"]["index"] === "B2" ||
            chk["problem"]["index"] === "B"
          ) {
            problemUnsolvedLevel["B"] += 1;
          } else if (
            chk["problem"]["index"] === "C1" ||
            chk["problem"]["index"] === "C2" ||
            chk["problem"]["index"] === "C"
          ) {
            problemUnsolvedLevel["C"] += 1;
          } else if (
            chk["problem"]["index"] === "D1" ||
            chk["problem"]["index"] === "D2" ||
            chk["problem"]["index"] === "D"
          ) {
            problemUnsolvedLevel["D"] += 1;
          } else if (
            chk["problem"]["index"] === "E1" ||
            chk["problem"]["index"] === "E2" ||
            chk["problem"]["index"] === "E"
          ) {
            problemUnsolvedLevel["E"] += 1;
          } else if (
            chk["problem"]["index"] === "F1" ||
            chk["problem"]["index"] === "F2" ||
            chk["problem"]["index"] === "F"
          ) {
            problemUnsolvedLevel["F"] += 1;
          } else {
            problemUnsolvedLevel[chk["problem"]["index"]] += 1;
          }
          unsolved.add(chk["problem"]["name"]);
          var problemId = {
            id: chk["problem"]["contestId"],
            index: chk["problem"]["index"]
          };
          unsolvedId.push(problemId);
        }
      }
    });
    return counter;
  };
  var programmingChart = [];
  programmingChart.push(["Languagge", "Submissions"]);
  const langStat = () =>
    programmingLanguage.forEach((v, e) => {
      // console.log(`${v} ${e} yess`);
      var take = [String(e), v];
      programmingChart.push(take);
    });
  var verdictChart = [];
  verdictChart.push(["Verduct", "Type"]);
  const verdictStat = () => {
    verdict.forEach((v, e) => {
      var take = [String(e), v];
      verdictChart.push(take);
    });
  };
  var tagChart = [];
  tagChart.push(["tag", "value"]);
  const tagStat = () => {
    tags.forEach((v, e) => {
      var take = [String(e), v];
      tagChart.push(take);
    });
  };
  var ratingBar = [];
  ratingBar.push(["Problem Ratings", "Total Solved"]);
  const ratingStat = () => {
    var maxi = 0;
    rating.forEach((v, e) => {
      if (e > maxi) {
        maxi = e;
      }
    });
    console.log("YES");
    for (var i = 800; i <= maxi; i += 100) {
      var take = [String(i), rating.get(i)];
      ratingBar.push(take);
    }
  };
  return (
    <>
      {/* <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> */}
      {/* <p>Total Accepted Solution: {acceptedSubmission()}</p> */}
      <Alert  variant={'dark'}>
        Total Accepted Solution: {acceptedSubmission()}
      </Alert>
      <ProblemLevel
        problemLevel={problemLevel}
        username={props.username}
        problemUnsolvedLevel={problemUnsolvedLevel}
      />
      {ratingStat()}
      <Charts
        Chart={ratingBar}
        chartType={"Bar"}
        title={`Problem Ratings of ${props.username}`}
      />
      {langStat()}
      
      {verdictStat()}
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Text>
              <Charts
                Chart={verdictChart}
                chartType={"PieChart"}
                title={`Verdict of ${props.username}`}
              />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card >
          <Card.Body>
            <Card.Text>
            <Charts
              Chart={programmingChart}
              chartType={"PieChart"}
              title={`Language of ${props.username}`}
            />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      
      {/* {programmingLanguage.size > 0 && langStat} */}
      {tagStat()}
      <Card >
        <Card.Body>
          <Card.Text>
              <Charts
                Chart={tagChart}
                chartType={"PieChart"}
                title={`Tags of ${props.username}`}
              />
          </Card.Text>
        </Card.Body>
      </Card>
      <Alert variant='dark'>Unsolved: {unsolvedId.length}</Alert>
      <Unsolved unsolvedId={unsolvedId} />
    </>
  );
}

export default UserStat;
