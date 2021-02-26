import React from "react";
import Scoretable from "../components/Scoretables/ScoreTable";
import ChaosScoreTable from "../components/Scoretables/ChaosScoreTable";
import Timer from "../components/Timer";

function Home(props) {
  return (
    <div>
      <Scoretable />
      <ChaosScoreTable />
      <Timer />
    </div>
  );
}

export default Home;
