import React from "react";
import { createRoot } from "react-dom/client";

import Hello from "./src/components/firstComponent";

const App = () => {
  return (
    <div>
      <Hello />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
