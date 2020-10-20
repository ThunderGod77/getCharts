import React, { useContext } from "react";

import { Table, Input, Button, Col } from "reactstrap";

import { useImmerReducer } from "use-immer";

import TheContext from "./../TheContext";

const PieInput = ({ submit }) => {
  const { showFlashMessage } = useContext(TheContext);
  function updateTable(state, action) {
    switch (action.type) {
      case "changeName":
        state[action.index].name = action.value;
        break;
      case "changeValue":
        state[action.index].value = +action.value;
        break;
      case "addNew":
        state.push({ name: "", value: 0 });
        break;
      case "delete":
        if (action.index === 0) {
          state.shift();
          break;
        }
        state.splice(action.index, action.index);
        break;

      default:
        return state;
    }
  }
  const [tableData, dispatchTableData] = useImmerReducer(updateTable, [
    { name: "lol", value: 356 },
    { name: "lolop", value: 600 },
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
    submit(tableData);
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
                <th scope="row" key={index}>
                  {index}
                </th>
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
                <td key={index}>
                  <Input
                    key={index}
                    placeholder="Amount"
                    type="number"
                    min={0}
                    value={a.value || 0}
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
      <Col sm="3">
        <Button color="danger" onClick={check}>
          Save
        </Button>
      </Col>
    </>
  );
};

export default PieInput;
