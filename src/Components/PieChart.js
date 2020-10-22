import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { Jumbotron, Row, Col } from "reactstrap";

import PieEnter from "./PieEnter";

function PChart(props) {
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const [theData, setTheData] = useState(data01);
  const newData = async (newValues) => {
    await setTheData([]);
    await setTheData(newValues);
  };

  const COLORS = [
    "#A569BD",

    "#154360",
    "#5DADE2",
    "#D35400",
    "#17A589",
    "#EC7063",
    "#0B5345",
    "#212F3D",
    "#512E5F",
    "#922B21",
    "#B7950B",
    "#D68910",
    "#D35400",
  ];

  return (
    <Jumbotron style={{ zIndex: "-1" }}>
      <Row>
        <Col xs="12" md="5">
          <PieChart width={1400} height={500}>
            <Pie
              data={theData}
              dataKey="value"
              nameKey="name"
              cx="25%"
              cy="50%"
              outerRadius={200}
              fill="#8884d8"
              label={true}
            >
              {data01.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} key={index} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="middle" layout="vertical" align="left" />
          </PieChart>
        </Col>
        <Col xs="12" md="7">
          <PieEnter submit={newData} />
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default PChart;
