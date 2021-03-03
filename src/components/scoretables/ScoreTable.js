import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./ScoreTable.css";
import axios from "axios";
import NormScoreTable from "./NormScoreTable";
import ChaosScoreTable from "./ChaosScoreTable";

function Scoretable() {
  const dummyresponse = {
    dummytopnorm: [
      {
        id: 1,
        username: "TomTom",
        score: 85,
        type: true,
        date: Date.now,
      },
      {
        id: 2,
        username: "Sally",
        score: 130,
        type: true,
        date: Date.now,
      },
      {
        id: 3,
        username: "typeking",
        score: 60,
        type: true,
        date: Date.now,
      },
      {
        id: 4,
        username: "newbytyper",
        score: 20,
        type: true,
        date: Date.now,
      },
      {
        id: 5,
        username: "john",
        score: 90,
        type: true,
        date: Date.now,
      },
      {
        id: 6,
        username: "TomTom",
        score: 100,
        type: true,
        date: Date.now,
      },
    ],
    dummytoppersonalnorm: [
      {
        id: 1,
        username: "TomTom",
        score: 38,
        type: true,
        date: "11/17/20",
      },
      {
        id: 1,
        username: "TomTom",
        score: 47,
        type: true,
        date: "11/18/20",
      },
      {
        id: 1,
        username: "TomTom",
        score: 29,
        type: true,
        date: "1/23/21",
      },
      {
        id: 1,
        username: "TomTom",
        score: 73,
        type: true,
        date: "2/14/21",
      },
      {
        id: 1,
        username: "TomTom",
        score: 85,
        type: true,
        date: Date.now,
      },
      {
        id: 1,
        username: "TomTom",
        score: 100,
        type: true,
        date: Date.now,
      },
    ],
    dummytopchaos: [
      {
        id: 1,
        username: "TomTom",
        score: 15,
        type: true,
        date: Date.now,
      },
      {
        id: 2,
        username: "Sally",
        score: 34,
        type: true,
        date: Date.now,
      },
      {
        id: 3,
        username: "typeking",
        score: 8,
        type: true,
        date: Date.now,
      },
      {
        id: 4,
        username: "newbytyper",
        score: 42,
        type: true,
        date: Date.now,
      },
      {
        id: 5,
        username: "john",
        score: 51,
        type: true,
        date: Date.now,
      },
      {
        id: 6,
        username: "TomTom",
        score: 27,
        type: true,
        date: Date.now,
      },
    ],
    dummytoppersonalchaos: [
      {
        id: 1,
        username: "TomTom",
        score: 7,
        type: true,
        date: "11/17/20",
      },
      {
        id: 1,
        username: "TomTom",
        score: 16,
        type: true,
        date: "11/18/20",
      },
      {
        id: 1,
        username: "TomTom",
        score: 29,
        type: true,
        date: "1/23/21",
      },
      {
        id: 1,
        username: "TomTom",
        score: 27,
        type: true,
        date: "2/14/21",
      },
      {
        id: 1,
        username: "TomTom",
        score: 13,
        type: true,
        date: Date.now,
      },
      {
        id: 1,
        username: "TomTom",
        score: 21,
        type: true,
        date: Date.now,
      },
    ],
  };
  console.log(dummyresponse);
  // const [state, setState] = useState({ topnorm: [], topchaos: [] });

  // useEffect(() => {
  //   axios.get("/api/highscores").then((response) => {
  //     console.log(response);
  //     //check for what setState should be called on--might be response.data, etc
  //     setState(response);
  //   });
  // });
  return (
    <div>
      <NormScoreTable response={dummyresponse} />
      <ChaosScoreTable response={dummyresponse} />
    </div>
  );
}

export default Scoretable;
