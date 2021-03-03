import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./ScoreTable.css";
import OverallTable from "./OverallTable";
import PersonalTable from "./PersonalTable";
// import axios from "axios";

function NormScoretable(props) {
  // const [state, setState] = useState({ topnorm: [], topchaos: [] });

  // useEffect(() => {
  //   axios.get("/api/highscores").then((response) => {
  //     console.log(response);
  //     //check for what setState should be called on--might be response.data, etc
  //     setState(response);
  //   });

  return (
    <div>
      <Container className="scorecol ml-0 col-md-6 text-center">
        <Row className="justify-content-xs-left">
          <Col>
            <h1>Normal Mode!</h1>
            <h5>High Scores</h5>
            <h3>Overall</h3>
            {/* <OverallTable scores={state.topnorm} /> */}
            <OverallTable Overall={props.Overall} />

            <h3>Personal</h3>
            {/* <PersonalTable scores={state.toppersonalnorm} /> */}
            <PersonalTable Personal={props.Personal} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NormScoretable;
