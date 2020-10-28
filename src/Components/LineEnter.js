import React, { useContext, useState } from "react";

import {
  Table,
  Input,
  Button,
  Col,
  Row,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownToggle,
} from "reactstrap";

import { useImmerReducer } from "use-immer";

import TheContext from "./../TheContext";

const LineInput = ({ submit }) => {
  const [Color, setColor] = useState("Colors");

  const changeColor = (val) => {
    setColor(val);
  };

  const Colors = {
    Red: "#DA0000",
    Blue: "#1AA3E9",
    Yellow: "#F6CA00",
    Gray: "#A4A4AB",
    Purple: "#9B1FE9",
    Black: "#222A2A",
    Brown: "#7F3E03",
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const { showFlashMessage } = useContext(TheContext);

  const [labelForValue, setLabelForValue] = useState("pv");

  function updateTable(state, action) {
    switch (action.type) {
      case "changeName":
        state[action.index].name = action.value;
        break;
      case "changeValue":
        state[action.index].pv = parseInt(action.value);
        break;
      case "addNew":
        state.push({ name: "", pv: 0 });
        break;
      case "delete":
        if (action.index === 0) {
          state.shift();
          break;
        } else {
          state.splice(action.index, action.index);
        }
        break;

      default:
        return state;
    }
  }
  const [tableData, dispatchTableData] = useImmerReducer(updateTable, [
    { name: "lol", pv: 356 },
    { name: "lolop", pv: 600 },
  ]);
  const check = () => {
    for (let a of tableData) {
      if (a.name === "" || a.value === 0 || a.name === undefined) {
        console.log("Please fill all the values.");
        showFlashMessage("Some values are empty.");
        return;
      } else {
        continue;
      }
    }
    let sendColor;
    if (Color === "Colors") {
      sendColor = "#8884d8";
    } else {
      sendColor = Color;
    }
    submit({ tableData: tableData, color: sendColor, label: labelForValue });
  };

  const changeLabel = (e) => {
    setLabelForValue(e.target.value);
  };

  return (
    <>
      <Table style={{ alignItems: "center" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>#</th>
            <th>Name of the Object</th>
            <th>Value</th>
            <th>
              <Button
                color="primary"
                onClick={() => {
                  dispatchTableData({
                    type: "addNew",
                  });
                }}
              >
                Add New
              </Button>
            </th>
          </tr>{" "}
        </thead>
        <tbody>
          {tableData.map((a, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td width="18%">
                  <Input
                    key={index}
                    placeholder="name"
                    value={a.name || ""}
                    onChange={(e) =>
                      dispatchTableData({
                        type: "changeName",
                        value: e.target.value,
                        index: index,
                      })
                    }
                  />
                </td>
                <td>
                  <Input
                    key={index}
                    placeholder="Amount"
                    type="number"
                    min={0}
                    value={a.pv || 0}
                    onChange={(e) =>
                      dispatchTableData({
                        type: "changeValue",
                        value: e.target.value,
                        index: index,
                      })
                    }
                  />
                </td>
                <td>
                  <Button
                    key={index}
                    color="primary"
                    onClick={() => {
                      dispatchTableData({
                        type: "delete",
                        index: index,
                      });
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Row style={{ marginBottom: "10px" }}>
        <Col sm="4">
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            color={Colors[Color] || "#5A6268"}
          >
            <DropdownToggle
              caret
              style={{ backgroundColor: Colors[Color] || "#5A6268" }}
            >
              {Color}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                onClick={() => {
                  changeColor("Red");
                }}
              >
                Red
              </DropdownItem>

              <DropdownItem
                onClick={() => {
                  changeColor("Blue");
                }}
              >
                Blue
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  changeColor("Yellow");
                }}
              >
                Yellow
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  changeColor("Gray");
                }}
              >
                Gray
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  changeColor("Purple");
                }}
              >
                Purple
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  changeColor("Black");
                }}
              >
                Black
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  changeColor("Brown");
                }}
              >
                Brown
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col sm="4">
          <Input
            placeholder="Label for the Value"
            style={{ width: "100%" }}
            value={labelForValue}
            onChange={changeLabel}
          />
        </Col>

        <Col sm="4">
          <Button color="danger" onClick={check}>
            Save
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default LineInput;
