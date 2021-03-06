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
          {props.personal.map((scores, index) => (
            <tr key={scores.id}>
              <td>{index + 1}</td>
              <td>{new Date(scores.date).getMonth() + 1}/{new Date(scores.date).getDate()}/{new Date(scores.date).getFullYear()}</td>
              <td>{scores.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default OverallTable;
