import React, { useEffect, setState } from "react";
import axios from "axios";
import { Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../styles/tables.scss";
import OverallTable from "./OverallTable";
import PersonalTable from "./PersonalTable";

function ChaosScoreTable() {
  const dummychaos = {
    dummytopchaos: [
      {
        id: 1,
        username: "TomTom",
        score: 15,
        type: true,
        date: Date.now,
      },
      {
        id: 2,
        username: "Sally",
        score: 34,
        type: true,
        date: Date.now,
      },
      {
        id: 3,
        username: "typeking",
        score: 8,
        type: true,
        date: Date.now,
      },
      {
        id: 4,
        username: "newbytyper",
        score: 42,
        type: true,
        date: Date.now,
      },
      {
        id: 5,
        username: "john",
        score: 51,
        type: true,
        date: Date.now,
      },
      {
        id: 6,
        username: "TomTom",
        score: 27,
        type: true,
        date: Date.now,
      },
    ],
    dummytoppersonalchaos: [
      {
        id: 7,
        username: "TomTom",
        score: 7,
        type: true,
        date: "11/17/20",
      },
      {
        id: 8,
        username: "TomTom",
        score: 16,
        type: true,
        date: "11/18/20",
      },
      {
        id: 9,
        username: "TomTom",
        score: 29,
        type: true,
        date: "1/23/21",
      },
      {
        id: 10,
        username: "TomTom",
        score: 27,
        type: true,
        date: "2/14/21",
      },
      {
        id: 11,
        username: "TomTom",
        score: 13,
        type: true,
        date: Date.now,
      },
      {
        id: 12,
        username: "TomTom",
        score: 21,
        type: true,
        date: Date.now,
      },
    ],
  };
  console.log(dummychaos);

  // useEffect(() => {
  //   axios.get("/api/highscores").then((response) => {
  //     console.log(response);
  //     //check for what setState should be called on--might be response.data, etc
  //     setState(response);
  //   });
  // });
  return (
    <div>
      <Container className="scorecol col-md-8 mr-0">
        <Row className="row">
          <Col>
            <h2 className="mode">Chaos Mode!</h2>
            <h5 className="highscores">High Scores</h5>
            <h6 className="tabletype">Overall</h6>
            {/* <OverallTable scores={state.topnorm} /> */}
            <OverallTable overall={dummychaos.dummytopchaos} />

            <h6 className="tabletype">Personal</h6>
            {/* <PersonalTable scores={state.toppersonalnorm} /> */}
            <PersonalTable personal={dummychaos.dummytoppersonalchaos} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ChaosScoreTable;
