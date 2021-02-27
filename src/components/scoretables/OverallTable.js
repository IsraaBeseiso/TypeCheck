import React, { Component } from "react";
import { Row, Col, Container, Table } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./ScoreTable.css";

function OverallTable(props) {
  // Maybe: table content state
  // Props will have array of high <i class="fas
  // Loop 5 times, each loop make a row
  // in row put number, name , and WPM
  // let tableContents =
  return (
    <div>
      <Table size="sm" className="scoretable">
        {/* {tableContents} */}
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>WPM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>WPM</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Name</td>
            <td>WPM</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Name</td>
            <td>WPM</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Name</td>
            <td>WPM</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Name</td>
            <td>WPM</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default OverallTable;
