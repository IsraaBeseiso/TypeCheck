import React from "react";
import ChaosScoreTable from "../components/scoretables/ChaosScoreTable";
import NormScoreTable from "../components/scoretables/NormScoreTable";
import { Row, Col } from "reactstrap";
import TypingBox from "../components/typing/TypingBox";
import "../styles/app.scss"

function Home() {
  return (
    <div>
      <Row>
        <Col>
          <NormScoreTable />
        </Col>

        <Col>
          <Row>
            <TypingBox />
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
