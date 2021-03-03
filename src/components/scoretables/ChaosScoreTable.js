import React, { useEffect, setState } from "react";
import axios from "axios";
import { Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./ScoreTable.css";
import OverallTable from "./OverallTable";
import PersonalTable from "./PersonalTable";

function ChaosScoretable() {
  // useEffect(() => {
  //   axios.get("/api/highscores").then((response) => {
  //     console.log(response);
  //     //check for what setState should be called on--might be response.data, etc
  //     setState(response);
  //   });
  // });
  return (
    <div>
      <Container className="scorecol mr-0 col-md-6 text-center">
        <Row className="justify-content-right mr-0">
          <Col>
            <h1>Chaos Mode!</h1>
            <h5>High Scores</h5>
            <h3>Overall</h3>
            <OverallTable />

            <h3>Personal</h3>
            <PersonalTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ChaosScoretable;
