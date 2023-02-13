import React from "react";

import NavComponent from "./NavComponent";
import UpperComponent from "./UpperComponent";
function Main() {
  return (
    <main>
      <NavComponent />
      <div className="upperContent">
        <UpperComponent />
      </div>
    </main>
  );
}

export default Main;
