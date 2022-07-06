import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const sum = (a, b) => {
  const res = a + b;
  return <h2>{res}</h2>;
};

const result = (
  <div>
    <h4>Il risultato è</h4>
    {sum(2, 2)}
  </div>
);

root.render(result);

/**
 * ?root.render (sum(2,2))
 */
