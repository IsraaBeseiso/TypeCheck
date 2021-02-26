import React from "react";
import { Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./ScoreTable.css";
import OverallTable from "./OverallTable";
import PersonalTable from "./PersonalTable";

function Scoretable() {
  // dummy hish scores
  return (
    <div>
      <Container className="border ml-0 col-2 text-center">
        <Row className="justify-content-xs-left">
          <Col sm="2">
            <h1>High Scores!</h1>
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

export default Scoretable;
