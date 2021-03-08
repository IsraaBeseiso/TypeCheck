import React, { Component } from "react";
import { Row, Col, Container, Table } from "reactstrap";
// import "../styles/app.scss";

function OverallTable(props) {
  console.log(props.overall);
  return (
    <div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Username</th>
            <th scope="col">WPM</th>
          </tr>
        </thead>
        <tbody>
          {props.overall.map((scores, index) => (
            <tr key={scores.id}>
              <td>{index + 1}</td>
              <td>{scores.username}</td>
              <td>{scores.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default OverallTable;
