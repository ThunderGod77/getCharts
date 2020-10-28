import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Tooltip,
  Legend,
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
} from "recharts";
import { Jumbotron, Row, Col } from "reactstrap";

import RadarEnter from "./RadarChartInput";

function PChart(props) {
  const data01 = [
    {
      name: "Page A",

      pv: 240.0,
    },
    {
      name: "Page B",

      pv: 139.8,
    },
    {
      name: "Page C",

      pv: 980.0,
    },
    {
      name: "Page D",

      pv: 390.8,
    },
    {
      name: "Page E",

      pv: 480.0,
    },
    {
      name: "Page F",

      pv: 380.0,
    },
    {
      name: "Page G",

      pv: 430.0,
    },
  ];
  const [theData, setTheData] = useState(data01);
  const [theName, setTheName] = useState("pv");

  const [color, setColor] = useState("#8884d8");
  const newData = async ({ tableData, color, label }) => {
    await setTheData([]);
    await setTheData(tableData);
    setColor(color);
    setTheName(label);
  };

  //   const COLORS = [
  //     "#A569BD",

  //     "#154360",
  //     "#5DADE2",
  //     "#D35400",
  //     "#17A589",
  //     "#EC7063",
  //     "#0B5345",
  //     "#212F3D",
  //     "#512E5F",
  //     "#922B21",
  //     "#B7950B",
  //     "#D68910",
  //     "#D35400",
  //   ];

  return (
    <Jumbotron style={{ zIndex: "-1" }}>
      <Row>
        <Col md="5">
          <RadarChart
            outerRadius={200}
            width={1400}
            height={500}
            data={theData}
            cx="25%"
            cy="50%"
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name={theName}
              dataKey="pv"
              stroke={color}
              fill={color}
              fillOpacity={0.5}
            />

            <Legend />
          </RadarChart>
        </Col>
        <Col xs="12" md="7">
          <RadarEnter submit={newData} />
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default PChart;
