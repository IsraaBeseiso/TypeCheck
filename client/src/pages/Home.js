import React from "react";
import ChaosScoreTable from "../components/scoretables/ChaosScoreTable";
import NormScoreTable from "../components/scoretables/NormScoreTable";
import Timer from "../components/Timer";
import { Row, Col } from "reactstrap";
import TypingBox from "../components/typing/TypingBox";
import "../styles/home.scss";

function Home() {
  return (
    <div>
      <Row></Row>
      <Row>
        <Col>
          <NormScoreTable />
        </Col>

        <Col>
          {/* <Row>
            <Timer />
          </Row> */}

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
