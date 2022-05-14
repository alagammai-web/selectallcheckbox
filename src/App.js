import React from "react";
// import Accordion from "./Accordion";
import Notificationcomp from "./Notificationcomp";
// import { accordionData } from "./utils/content";
import "./App.css";
import { Tryuser } from "./Tryuser";

const App = () => {
  return (
    <div>
      <h3 className="text-center mt-3 mb-3">
        React Accordion with select all checkbox demo
      </h3>

      <Notificationcomp />

      {/* <Tryuser /> */}
    </div>
  );
};

export default App;
