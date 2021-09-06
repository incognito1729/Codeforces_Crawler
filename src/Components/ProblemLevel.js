import React from "react";
import Card from "./Card";
import Chart from "react-google-charts";

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
      <Card>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["Problems", "Solved"],
            ["A", props.problemLevel["A"]],
            ["B", props.problemLevel["B"]],
            ["C", props.problemLevel["C"]],
            ["D", props.problemLevel["D"]],
            ["E", props.problemLevel["E"]],
            ["F", props.problemLevel["F"]],
            ["G", props.problemLevel["G"]],
            ["H", props.problemLevel["H"]],
            ["I", props.problemLevel["I"]],
            ["J", props.problemLevel["J"]],
            ["K", props.problemLevel["K"]],
            ["L", props.problemLevel["L"]]
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
