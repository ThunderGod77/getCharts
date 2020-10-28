import React, { useState } from "react";

import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";
import { Jumbotron, Row, Col } from "reactstrap";

import LineEnter from "./LineEnter";

export default function LineC(props) {
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
  return (
    <Jumbotron style={{ zIndex: "-1" }}>
      <Row>
        <Col xs="12" md="5">
          <LineChart
            width={750}
            height={500}
            data={theData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke={color} name={theName} />
          </LineChart>
        </Col>
        <Col xs="12" md="7">
          <LineEnter submit={newData} />
        </Col>
      </Row>
    </Jumbotron>
  );
}
