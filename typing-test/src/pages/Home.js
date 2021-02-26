import React from "react";
import Scoretable from "../components/ScoreTable";
import ChaosScoreTable from "../components/ChaosScoreTable";

function Home(props) {
  return (
    <div>
      <Scoretable />
      <ChaosScoreTable />
    </div>
  );
}

export default Home;
