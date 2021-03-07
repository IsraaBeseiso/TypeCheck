import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../styles/tables.scss";
import OverallTable from "./OverallTable";
import PersonalTable from "./PersonalTable";

function ChaosScoreTable() {
  const [state, setState] = useState({ topchaos: [], toppersonalchaos: [] })


  useEffect(() => {
    axios.get("/api/highscores").then((response) => {
      console.log(response);
      //check for what setState should be called on--might be response.data, etc
      setState({ ...state, ...response.data });
    });
  }, []);
  console.log("chaos state ", state.topchaos)
  return (
    <div>
      <Container className="scorecol col-md-8 mr-0">
        <Row className="row">
          <Col>
            <h2 className="mode">Chaos Mode!</h2>
            <h5 className="highscores">High Scores</h5>
            <h6 className="tabletype">Overall</h6>
            <OverallTable overall={state.topnorm} />
            {/* <OverallTable overall={dummychaos.dummytopchaos} /> */}

            <h6 className="tabletype">Personal</h6>
            <PersonalTable personal={state.toppersonalchaos} />
            {/* <PersonalTable personal={dummychaos.dummytoppersonalchaos} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ChaosScoreTable;
