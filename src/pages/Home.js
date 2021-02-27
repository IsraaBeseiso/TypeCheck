import React from "react";
import Scoretable from "../components/Scoretables/ScoreTable";
import ChaosScoreTable from "../components/Scoretables/ChaosScoreTable";
import Timer from "../components/Timer";
import { Row, Col } from "reactstrap";
import Typingbox from "../components/Typingbox"
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
            <Timer />
          </Row>

          <Row>
           <Typingbox/>
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
