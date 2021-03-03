import React from "react";
import Scoretable from "../components/scoretables/ScoreTable";
import ChaosScoreTable from "../components/scoretables/ChaosScoreTable";
import Timer from "../components/Timer";
import { Row, Col } from "reactstrap";
import TypingBox from "../components/typing/TypingBox";

function Home() {
  return (
    <div>
      <Row></Row>
      <Row>
        <Col>
          <Scoretable />
        </Col>

        <Col>
          {/* <Row>
            <Timer />
          </Row> */}

          <Row>
            <TypingBox />
          </Row>
        </Col>

        <Col></Col>
      </Row>
    </div>
  );
}

export default Home;
