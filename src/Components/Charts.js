import React from "react";
import Card from "./Card";
import Chart from "react-google-charts";
import { Spinner, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Charts(props) {
  const Dataa = props.Chart;
  console.log(Dataa);
  return (
    < >
      <Chart
        width={"800px"}
        height={"400px"}
        chartType={props.chartType}
        loader={<Spinner animation="border" variant="primary" />}
        data={Dataa}
        options={{
          title: props.title,
          // Just add this option
          backgroundColor: '#d3d3d4',
          is3D: true
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </>
  );
}

export default Charts;
