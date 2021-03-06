import React from "react";
// import { Table } from "reactstrap";
import styles from "../../styles/tables.scss";

function OverallTable(props) {
  console.log(props.personal);
  // Maybe: table content state variable using useState
  // Props will have array of high <i class="fas
  // Loop 5 times, each loop make a row
  // in row put number, name , and WPM
  // let tableContents =
  return (
    <>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Date</th>
            <th scope="col">WPM</th>
          </tr>
        </thead>
        <tbody>
          {props.personal.map((scores) => (
            <tr key={scores.id}>
              <td></td>
              <td>{scores.date}</td>
              <td>{scores.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default OverallTable;
