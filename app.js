import React from "react";
import { createRoot } from "react-dom/client";

import Hello from "./src/components/firstComponent";
import Profile from "./src/components/event"

const App = () => {
  return (
    <div>
      <Hello />
      <Profile/>
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
