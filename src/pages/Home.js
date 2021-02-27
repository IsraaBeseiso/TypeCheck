import React from "react";
import Scoretable from "../components/Scoretables/ScoreTable";
import ChaosScoreTable from "../components/Scoretables/ChaosScoreTable";
import Timer from "../components/Timer";
import { Row, Col } from "reactstrap";
// import TypingInput from "../components/typing/TypingInput";

function Home() {
  return (
    <div>
      <Row></Row>
      <Row>
        <Col>
          <Scoretable />
        </Col>

        <Col>
          <Row>
            {/** Type test display goes here */}
            <h1>type test display</h1>
          </Row>

          <Row>
            <Timer />
          </Row>

          <Row>
            {/* <TypingInput /> */}
            Type input display goes here
          </Row>
        </Col>

        <Col>
          <ChaosScoreTable />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
