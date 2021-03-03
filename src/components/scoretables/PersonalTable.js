import React from "react";
// import { Table } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./ScoreTable.css";

function OverallTable(props) {
  // Maybe: table content state variable using useState
  // Props will have array of high <i class="fas
  // Loop 5 times, each loop make a row
  // in row put number, name , and WPM
  // let tableContents =
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Username</th>
            <th scope="col">WPM</th>
          </tr>
        </thead>
        <tbody>
          {/* {props.Personal.map((scores) => (
            <tr key={scores.id}>
              <td>{scores.date}</td>
              <td>{scores.score}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  );
}

export default OverallTable;
