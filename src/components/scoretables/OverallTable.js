import React, { Component } from "react";
import { Row, Col, Container, Table } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./ScoreTable.css";

function OverallTable(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Username</th>
            <th scope="col">WPM</th>
          </tr>
        </thead>
        <tbody>
          {/* {props.overall.map((scores) => (
            <tr key={scores.id}>
              <td>{scores.username}</td>
              <td>{scores.date}</td>
              <td>{scores.score}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
export default OverallTable;
