import React from "react";
import Card from "./Card";
import Chart from "react-google-charts";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ProblemLevel(props) {
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
  return (
    <>
      <Card >
        <Chart
          width={"900px"}
          height={"600px"}

          chartType="Bar"
          loader={<Spinner animation="border" variant="primary" />}
          data={[
            ["Problems", "Solved", "unsolved"],
            ["A", props.problemLevel["A"], props.problemUnsolvedLevel["A"]],
            ["B", props.problemLevel["B"], props.problemUnsolvedLevel["B"]],
            ["C", props.problemLevel["C"], props.problemUnsolvedLevel["C"]],
            ["D", props.problemLevel["D"], props.problemUnsolvedLevel["D"]],
            ["E", props.problemLevel["E"], props.problemUnsolvedLevel["E"]],
            ["F", props.problemLevel["F"], props.problemUnsolvedLevel["F"]],
            ["G", props.problemLevel["G"], props.problemUnsolvedLevel["G"]],
            ["H", props.problemLevel["H"], props.problemUnsolvedLevel["H"]],
            ["I", props.problemLevel["I"], props.problemUnsolvedLevel["I"]],
            ["J", props.problemLevel["J"], props.problemUnsolvedLevel["J"]],
            ["K", props.problemLevel["K"], props.problemUnsolvedLevel["K"]],
            ["L", props.problemLevel["L"], props.problemUnsolvedLevel["L"]]
          ]}
          options={{
            // Material design options
            chart: {
              title: `Level Of ${props.username}`,
              subtitle: "Number of Problem solved of difficulty"
            }
          }}
          // For tests
          rootProps={{ "data-testid": "1" }}
        />
      </Card>
    </>
  );
}

export default ProblemLevel;
