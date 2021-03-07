import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../styles/tables.scss";
import OverallTable from "./OverallTable";
import PersonalTable from "./PersonalTable";

import axios from "axios";



function NormScoretable() {
  const [state, setState] = useState({ topnorm: [], toppersonalnorm: [] })


  // const [state, setState] = useState({ topnorm: [], topchaos: [] });

  useEffect(() => {
    axios.get("/api/highscores").then((response) => {
      console.log("get highscores" + response);
      //check for what setState should be called on--might be response.data, etc
      setState({ ...state, ...response.data });
    })
  }, []);
  console.log("state normscore", state.topnorm)
  return (
    <div>
      <Container className="scorecol col-md-8 ml-0">
        <Row className="row">
          <Col>
            <h2 className="mode">Normal Mode!</h2>
            <h5 className="highscores">High Scores</h5>
            <h6 className="tabletype">Overall</h6>
            <OverallTable overall={state.topnorm} />
            {/* <OverallTable overall={dummynorm.dummytopnorm} /> */}

            <h6 className="tabletype">Personal</h6>
            <PersonalTable personal={state.toppersonalnorm} />
            {/* <PersonalTable personal={dummynorm.dummytoppersonalnorm} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NormScoretable;
